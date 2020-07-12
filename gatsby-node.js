const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)
 
// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({ fromPath: '/home', toPath: '/', redirectInBrowser: true, isPermanent: true })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.
 
    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                template
                featured_media{
                  caption
                  source_url
                }
                acf{
                  header
                  tagline
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
 
        // Create Page pages.
        const homeTemplate = path.resolve("./src/templates/home.js")
        const aboutTemplate = path.resolve("./src/templates/about.js")
        const contactTemplate = path.resolve("./src/templates/contact.js")
        const portfolioUnderContentTemplate = path.resolve("./src/templates/portfolioUnderContent.js")
        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'


        


        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          // deciding which template to use based on the slug
          let component;
          const { slug } = edge.node;
          if(slug === 'home'){
            component = homeTemplate;
          }else if(slug === 'about'){
            component = aboutTemplate;
          }else if(slug === 'contact'){
            component = contactTemplate;         
          }

          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: (edge.node.slug=='home') ? '/' : `${edge.node.slug}`,
            component: slash(edge.node.template === `portfolio_under_content.php` ? portfolioUnderContentTemplate : component),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====
 
      // ==== PORTFOLIO ====
      .then(() => {
        graphql(
          `
          {
            allWordpressWpPortfolio {
              edges{
                node{
                  id
                  title
                  excerpt
                  content
                  slug
                  featured_media {
                    source_url
                  }
                  acf {
                    portfolio_url
                    youtube_embed
                  }
                }
              }
            }
          }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const portfolioTemplate = path.resolve("./src/templates/portfolio.js")
          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpPortfolio.edges, edge => {
            createPage({
              path: `/portfolio/${edge.node.slug}/`,
              component: slash(portfolioTemplate),
              context: edge.node,
            })
          })
          
        })
      })
    // ==== END PORTFOLIO ====
    // ==== BLOG POSTS ====
    .then(() => {
      graphql(`
        {
          allWordpressPost{
            edges{
              node{
                excerpt
                wordpress_id
                date(formatString:"MMM Do YYYY HH:mm")
                title
                content
                slug
              }
            }
          }
        }
      `).then(result => {
        if(result.errors){
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allWordpressPost.edges;
        const postsPerPage = 4;
        const numberOfPages = Math.ceil(posts.length / postsPerPage);
        const blogPostListTemplate = path.resolve('./src/templates/blogPostList.js')

        Array.from({length: numberOfPages}).forEach((page, index) => {
          createPage({
            component: slash(blogPostListTemplate),
            path: index === 0 ? `/blog` : `/blog/${index + 1}`,
            context: {
              posts: posts.slice(index * postsPerPage, (index * postsPerPage) + postsPerPage),
              numberOfPages,
              currentPage: index + 1
            }
          })
        })

        const blogTemplate = path.resolve("./src/templates/blog.js")
        _.each(posts, (post) => {
          createPage({
            path: `/post/${post.node.slug}`,
            component: slash(blogTemplate),
            context: post.node
          })
        })
        resolve()
      })
    })
  })
}