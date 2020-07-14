import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title }) {
  const site  = useStaticQuery(
    graphql`
        {
          allWordpressSiteMetadata{
            edges{
              node{
                name
                description
              }
            }
          }
        }
    `
  )

  return (
    <Helmet 
    title={ title ? `${title} | ${site.allWordpressSiteMetadata.edges[0].node.name} | ${site.allWordpressSiteMetadata.edges[0].node.description}` : `${site.allWordpressSiteMetadata.edges[0].node.name} | ${site.allWordpressSiteMetadata.edges[0].node.description}`} >
      {/* <!-- Primary Meta Tags --> */}
      
      <meta name="description" content="I am a web developer based in beautiful Atlanta, Georgia. I love creating slick frontend designs for businesses and clients looking to attract more customers to their website."/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://www.conradcasper.io/"/>
      <meta property="og:title" content="Conrad Casper | Full Stack Web Developer"/>
      <meta property="og:description" content="I am a web developer based in beautiful Atlanta, Georgia. I love creating slick frontend designs for businesses and clients looking to attract more customers to their website."/>
      <meta property="og:image" content="http://wp.conradcasper.io/wp-content/uploads/2020/07/Screen-Shot-2020-07-14-at-12.55.03-PM.png"/>

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://www.conradcasper.io/"/>
      <meta name="twitter:creator" content="@Conrad_Casper"></meta>
      <meta property="twitter:title" content="Conrad Casper | Full Stack Web Developer"/>
      <meta property="twitter:description" content="I am a web developer based in beautiful Atlanta, Georgia. I love creating slick frontend designs for businesses and clients looking to attract more customers to their website."/>
      <meta property="twitter:image" content="http://wp.conradcasper.io/wp-content/uploads/2020/07/Screen-Shot-2020-07-14-at-12.55.03-PM.png"></meta>
    </Helmet>
  )
}




export default SEO;
  

