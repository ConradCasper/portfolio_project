import React from 'react';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { StackOverflow } from '@styled-icons/boxicons-logos/StackOverflow';
import styled from 'styled-components';


const ContentContainer = styled.div`
    max-width: 650px;
    margin: 40px auto;
    text-align: center;
    width: 100%;
    
    
    

    @media (max-width: 768px) {
        
        flex-flow: row nowrap;
        justify-content: center;
    

        a {
            padding: 10px 10px !important;
            z-index: 1 !important;
        }
        
    }
`

// ------------------------------------- Linkedin ------------------------------------------------


const Linkedin = styled(LinkedinSquare)`
    max-width: 30px;
    color: white;
    align-self: center;
    z-index: 1 !important;
`


// ------------------------------ Github --------------------------------------------




const GithubLink = styled(Github)`
    max-width: 30px;
    color: white;
    align-self: center;
    z-index: 1 !important;
`
    
    

// -------------------------------- Twitter ---------------------------------------



const TwitterLink = styled(Twitter)`
    max-width: 30px;
    color: white;
    align-self: center;
    z-index: 1 !important;
`

// -------------------------------------- Stack Overflow -------------------------------



const StackLink = styled(StackOverflow)`
    max-width: 30px;
    color: white;
    align-self: center;
    z-index: 1 !important;
`





export default ({ open }) => (
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
);