import React from 'react';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { StackOverflow } from '@styled-icons/boxicons-logos/StackOverflow';
import { EmailOutline } from '@styled-icons/evaicons-outline/EmailOutline';
import { Instagram } from '@styled-icons/feather/Instagram';
import { Soundcloud } from '@styled-icons/fa-brands/Soundcloud';

import styled from 'styled-components';


const ContentContainer = styled.div`
    @media (max-width: 768px){

        z-index: 11;
        display: flex;
        justify-content: center;
        align-items: center;

        max-width: 768px;
        min-width: 320px;
        
        min-height: 92px;
        

        a {
            padding: 0 10px !important;
            height: 50px !important;
            width: 50px !important;
        }
    }
`
    



        
    

        
        

// ------------------------------------- Linkedin ------------------------------------------------


const Linkedin = styled(LinkedinSquare)`
    max-width: 30px;
    color: white;
    align-self: center;
`


// ------------------------------ Github --------------------------------------------




const GithubLink = styled(Github)`
    max-width: 30px;
    color: white;
    align-self: center;
`
    
    

// -------------------------------- Twitter ---------------------------------------



const TwitterLink = styled(Twitter)`
    max-width: 30px;
    color: white;
    align-self: center;
`

// -------------------------------------- Stack Overflow -------------------------------



const StackLink = styled(StackOverflow)`
    max-width: 30px;
    color: white;
    align-self: center;
`

// -------------------------------------- Email -------------------------------



const EmailLink = styled(EmailOutline)`
    max-width: 30px;
    color: white;
    align-self: center;
`

// ------------------------------------- Instagram ------------------------------------------------

const InstagramLink = styled(Instagram)`
    max-width: 30px;
    color: white;
    align-self: center;
`

// ------------------------------------- SoundCloud ------------------------------------------------

const SoundcloudLink = styled(Soundcloud)`
    max-width: 30px;
    color: white;
    align-self: center;
`




export default ({ open }) => (
    <ContentContainer>
        <a href="https://www.linkedin.com/in/conradcasper/">
            <Linkedin />
        </a>
        <a href="https://github.com/ConradCasper">
            <GithubLink />
        </a>
        <a href="https://stackoverflow.com/users/10720310/conrad-casper">
            <StackLink />
        </a>
        <a href="mailto:cnrdcasper@gmail.com">
                    <EmailLink />
        </a>
        <a href="https://twitter.com/Conrad_Casper">
            <TwitterLink />
        </a>
        <a href="https://www.instagram.com/captain.conrad/">
            <InstagramLink />
        </a>
        <a href="https://soundcloud.com/dj_repsac">
            <SoundcloudLink />
        </a>
        
    </ContentContainer>
);