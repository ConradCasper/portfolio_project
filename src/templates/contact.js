import React from 'react';
import Layout from '../components/layout';
import styled, { keyframes } from 'styled-components';
import SEO from '../components/seo';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { StackOverflow } from '@styled-icons/boxicons-logos/StackOverflow';


const contentFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const ContentContainer = styled.div`
    max-width: 650px;
    animation: 2s ${contentFadeIn} ease-out;
    margin: 0 auto;
    text-align: center;
`


// ------------------------------------- Linkedin ------------------------------------------------

const linkedInHover = keyframes`
    0% {
        color: black;
    }

    100% {
        color: #0077b5;
    }
`


const Linkedin = styled(LinkedinSquare)`
    max-width: 300px;
    color: black;

    :hover, :active {
        animation: ${linkedInHover} 1s forwards;
    }
`
// ------------------------------ Github --------------------------------------------


const githubHover = keyframes`
    0% {
        color: black;
    }

    100% {
        color: #7E7B7A;
    }
`

const GithubLink = styled(Github)`
max-width: 300px;
    color: black;

    :hover {
        animation: ${githubHover} 1s forwards;
    }
`
// -------------------------------- Twitter ---------------------------------------

const twitterHover = keyframes`
    0% {
        color: black;
    }

    100% {
        color: #0077b5;
    }
`

const TwitterLink = styled(Twitter)`
    max-width: 300px;
    color: black;

    :hover {
        animation: ${twitterHover} 1s forwards;
    }
`

// -------------------------------------- Stack Overflow -------------------------------

const stackHover = keyframes`
    0% {
        color: black;
    }

    100% {
        color: #FF792B;
    }
`

const StackLink = styled(StackOverflow)`
    max-width: 300px;
    color: black;

    :hover {
        animation: ${stackHover} 1s forwards;
    }
`







export default ({ pageContext }) => (
    <Layout>
        <SEO title="Contact" />
            <ContentContainer>
                <a href="https://www.linkedin.com/in/conradcasper/">
                    <Linkedin />
                </a>
                <a href="https://github.com/ConradCasper">
                    <GithubLink />
                </a>
                <a href="https://twitter.com/Conrad_Casper">
                    <TwitterLink />
                </a>
                <a href="https://stackoverflow.com/users/10720310/conrad-casper">
                    <StackLink />
                </a>
            </ContentContainer>
    </Layout>
);
                
    