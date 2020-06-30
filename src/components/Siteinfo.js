import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
    flex-grow:1;
    color: white;
    margin: auto 0;
`

const SiteTitle = styled.div`
    font-weight: bold;
    padding: 0px 0px 0px 5px;
`

const Tagline = styled.div`
    padding: 0px 0px 0px 5px;
`

const SiteInfo = () => (
    <StaticQuery query={graphql`
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
    `} render={props => (
        <SiteInfoWrapper>
            <SiteTitle>
                {props.allWordpressSiteMetadata.edges[0].node.name}
            </SiteTitle>
            <Tagline>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </Tagline>
        </SiteInfoWrapper>
    )}/>
);

export default SiteInfo;