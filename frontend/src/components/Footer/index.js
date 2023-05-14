import React from 'react';
import { FooterContainer, FooterLink,FooterLinkItems,FooterLinkTitle,FooterLinksContainer,FooterLinksWrapper,FooterWrap,SocialMedia,SocialMediaWrap,SocialIconLink,SocialIcons,SocialLogo,WebsiteRights} from './FooterElements';
import {animateScroll as scroll} from 'react-scroll'

import {FaFacebook,FaInstagram,FaYoutube,FaTwitter, FaLinkedin} from 'react-icons/fa';
const Footer = () => {
    const toggleHome = () =>{
        scroll.scrollToTop();
      }
  return (
      <>    
      <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                <FooterLinkItems>
                        <FooterLinkTitle>Features</FooterLinkTitle>
                        <FooterLink to='/'>Prioritize Tasks</FooterLink>
                        <FooterLink to='/'>24*7 Available</FooterLink>
                        <FooterLink to='/'>Free for All</FooterLink>
                        <FooterLink to='/'>Multi-assisstance</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Support</FooterLinkTitle>
                        <FooterLink to='/'>Task Manager</FooterLink>
                        <FooterLink to='/'>Diet Scheduler</FooterLink>
                        <FooterLink to='/'>Event Planner</FooterLink>
                        <FooterLink to='/'>Financial Buddy</FooterLink>
                        <FooterLink to='/'>Expense Tracker</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/'>support@smartplanner.in</FooterLink>
                        <FooterLink to='/'>Param Jani</FooterLink>
                        <FooterLink to='/'>+91 9898399741</FooterLink>
                        <FooterLink to='/'>Rushikesh Patels</FooterLink>
                        <FooterLink to='/'>+91 9878789845</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Company</FooterLinkTitle>
                        <FooterLink to='/'>Terms &#38; Conditions</FooterLink>
                        <FooterLink to='/'>Privacy Policy</FooterLink>
                        <FooterLink to='/'>Career</FooterLink>
                        <FooterLink to='/'>Services</FooterLink>

                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Join Us</FooterLinkTitle>
                        <FooterLink to='/login'>Log In</FooterLink>
                        <FooterLink to='/signup'>Sign Up</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
    </>

  );
};

export default Footer;