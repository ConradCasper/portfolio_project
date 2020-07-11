import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import SEO from '../components/seo';




const YouTubeEmbedResponsive = styled.div`
  position:relative;
  padding-bottom:56.25%;
  padding-top:30px;
  height:0;
  overflow:hidden;
  iframe, object, embed{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
`;

const PortfolioImage = styled.img`
    width: 100%;
`





export default ({ pageContext }) => (
    <Layout>
        <SEO  title={pageContext.title} />
        <h1>
            {pageContext.title}
        </h1>
        {pageContext.acf.portfolio_url !== "" ? 
            <>
                
                <a href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer" style={{'color': 'white'}}>
                    <strong>
                        Live Site 
                    </strong>
                </a>
                <PortfolioImage src={pageContext.featured_media.source_url} />
            </>

            :
            <>
                <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
                <YouTubeEmbedResponsive dangerouslySetInnerHTML={{__html: pageContext.acf.youtube_embed}} />
            </>
        }
        
        
        
    </Layout>
)