import React from 'react';
import { AboutColumn1, AboutColumn2, AboutContainer, AboutH1, AboutHeading, AboutImg, AboutImgWrap, AboutSubtitle, AboutTextWrapper, AboutWrapper, AboutRow } from './AboutElements';
import img from '../../images/about.jpg';
const About = () => {
  return (
    <>
      <AboutContainer id='about'>
        <AboutH1>About Us</AboutH1>
        <AboutWrapper>
          <AboutRow>
            <AboutColumn1>
              <AboutTextWrapper>
                <AboutHeading>Our Story.</AboutHeading>
                <AboutSubtitle>We are group of two, one Param Jani an undergradute pursuing majors in computer science and engineering &#38; other Rushikesh Patel highly experienced project manager. In the growing world of smart technology came the idea to make day-to-day activities of humans smarter. Every person faces pile of humdrum tasks daily. Out of which some are resolved and others are forgotten. These problems became seeds of Smartify. We decided to built an online free personal assistant with all the features like task manager, diet scheduler, password keeper, expense tracker, financial buddy and retirement planner. Users can jot down approach to a smarter world. We make sure that the platform is ad-free, so that user can achieve focused and productive outcomes.</AboutSubtitle>
              </AboutTextWrapper>
            </AboutColumn1>
            <AboutColumn2>
              <AboutImgWrap>
                <AboutImg src={img} alt="aboutImg"/>
              </AboutImgWrap>
            </AboutColumn2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;