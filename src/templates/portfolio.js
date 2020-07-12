import React from 'react'
import Layout from '../components/layout'
import styled, { keyframes } from 'styled-components'
import SEO from '../components/seo';
import { Link } from 'gatsby';




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

const liveSiteFillIn = keyframes`
    0% {
        background: rgba(0,0,0, 0.3);
    }
    
    100% {
        background: red;
    }
`


const SiteLink = styled(Link)`
text-decoration: none;
background: #8B0000;
color: white;
border-radius: 5px;
padding: 8px 8px;
margin-bottom: 10px;
display: inline-block;

&:hover {
  animation: 0.3s ${liveSiteFillIn} linear forwards;
  -webkit-box-shadow: inset 0px 1px 22px 1px rgba(255,255,255,0.29);
  -moz-box-shadow: inset 0px 1px 22px 1px rgba(255,255,255,0.29);
  box-shadow: inset 0px 1px 22px 1px rgba
`





export default ({ pageContext }) => (
    <Layout>
        <SEO  title={pageContext.title} />
        <h1>
            {pageContext.title}
        </h1>
        {pageContext.acf.portfolio_url !== "" ? 
            <>
                
                <SiteLink href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer" >
                    {/* <strong> */}
                        Visit live site 
                    {/* </strong> */}
                </SiteLink>
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