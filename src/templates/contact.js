import React from 'react';
import Layout from '../components/layout';
import styled, { keyframes } from 'styled-components';
import SEO from '../components/seo';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { StackOverflow } from '@styled-icons/boxicons-logos/StackOverflow';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';


const linkedinFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const emailFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const githubFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const stackFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const twitterFadeIn = keyframes`
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
    // max-width: 960px;
    width: 100%;
    // height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content:center;
    justify-content: center;
    align-self: center;
`
    

    

    
    
    


// ------------------------------------- Linkedin ------------------------------------------------

const linkedInHover = keyframes`
    0% {
        color: white;
    }

    100% {
        color: black;
    }
`


const Linkedin = styled(LinkedinSquare)`
    width: 300px;
    color: white;
    align-self: center;
    animation: 2s ${linkedinFadeIn} ease-out;

    :hover {
        animation: 2s ${linkedinFadeIn} ease-out, ${linkedInHover} 1s forwards;
    }
`
// ------------------------------ Github --------------------------------------------


const githubHover = keyframes`
    0% {
        color: white;
    }

    100% {
        color: black;
    }
`

const GithubLink = styled(Github)`
    width: 300px;
    color: white;
    // align-self: center;
    animation: 2s ${githubFadeIn} ease-out;

    :hover {
        animation: 2s ${githubFadeIn} ease-out, ${githubHover} 1s forwards;
    }
`
// -------------------------------- Twitter ---------------------------------------

const twitterHover = keyframes`
    0% {
        color: white;
    }

    100% {
        color: black;
    }
`

const TwitterLink = styled(Twitter)`
    width: 300px;
    color: white;
    align-self: center;
    animation: 2s ${twitterFadeIn} ease-out;

    :hover {
        animation: 2s ${twitterFadeIn} ease-out, ${twitterHover} 1s forwards;
    }
`

// -------------------------------------- Stack Overflow -------------------------------

const stackHover = keyframes`
    0% {
        color: white;
    }

    100% {
        color: black;
    }
`

const StackLink = styled(StackOverflow)`
    width: 300px;
    color: white;
    align-self: center;
    animation: 2s ${stackFadeIn} ease-out;

    :hover {
        animation: 2s ${stackFadeIn} ease-out, ${stackHover} 1s forwards;
    }
`

// -------------------------------------- Email -------------------------------

const emailHover = keyframes`
    0% {
        color: white;
    }

    100% {
        color: black;
    }
`

const EmailLink = styled(EmailOutline)`
    width: 300px;
    color: white;
    align-self: center;
    animation: 2s ${emailFadeIn} ease-out;

    :hover {
        animation: 2s ${emailFadeIn} ease-out, ${emailHover} 1s forwards;
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
                <a href="mailto:cnrdcasper@gmail.com">
                    <EmailLink />
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
                
    