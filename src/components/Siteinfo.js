import React from 'react';
import {graphql, StaticQuery} from 'gatsby';
import styled from 'styled-components';
import Logo from './logo';


const SiteInfoWrapper = styled.div`
    flex-grow: 1;
    color: #728792;
    margin: auto 0;
    padding: 0 0 0 16px;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 65px;
`

const HahaDiv = styled.div`
    width: 1px;
    height: 24px;
    margin-right: 14px;
    margin-left: 15px;
    border-left: 1px solid rgba(204, 204, 204, 1);
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
            <Logo />
            <HahaDiv />
            <Tagline>
                {props.allWordpressSiteMetadata.edges[0].node.description}
            </Tagline>
        </SiteInfoWrapper>
    )}/>
);

export default SiteInfo;