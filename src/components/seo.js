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
    <Helmet title={ `${title}` ? `${title} | ${site.allWordpressSiteMetadata.edges[0].node.name} | ${site.allWordpressSiteMetadata.edges[0].node.description}` : `${site.allWordpressSiteMetadata.edges[0].node.name} | ${site.allWordpressSiteMetadata.edges[0].node.description}`} />
  )
}




export default SEO;
  

