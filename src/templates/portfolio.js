import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'

// const FeaturedImage = styled.img`
//     max-width: 300px;
//     margin: 16px 0;
// `

const YouTubeVideoWrapper = styled.div`
    position: relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
`

const YouTubeVideo = styled.div`
    position:absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    max-width:600px;
    height:100%;
    margin: auto;
`





export default ({ pageContext }) => (
    <Layout>
        <h1>
            {pageContext.title}
        </h1>
        {pageContext.acf.portfolio_url !== "" ? 
            <div>
                <strong>
                    Website url:
                </strong>
                <a href={pageContext.acf.portfolio_url} target="_blank" rel="noopener noreferrer">
                {pageContext.acf.portfolio_url}
                </a>
            </div>

            :

            <div>
                
            </div>

        }
        
        <div>
            {/* <FeaturedImage src={pageContext.featured_media.source_url} />  */}
        </div>
        <div dangerouslySetInnerHTML={{__html: pageContext.content}}/>
        <YouTubeVideoWrapper>
            <YouTubeVideo dangerouslySetInnerHTML={{__html: pageContext.excerpt}} /> 
        </YouTubeVideoWrapper>
    </Layout>
)