import React, { useState } from 'react';
import { Button } from '../Button';
import img from '../../images/hero.svg'
import { HeroContainer,HeroPart,Heading,HeroRow, HeroColumn,TextWrapper,TopLine, Subtitle,HeroButton,ArrowForward,ArrowRight,ImgWrapper,Img } from './HeroElements';
import Typical from 'react-typical';

const HeroSection = () => {
  const [hover,sethover] = useState(false);
  const onHover = () =>{
    sethover(!hover)
  }
  return (
      <HeroContainer>
        <HeroPart>
          <HeroRow>
              <HeroColumn>
                <TextWrapper>
                  <TopLine>Need personal assisstant???
                  </TopLine>
                  <Heading>Introducing smart assisstant to your day to day activities</Heading>
                  <Subtitle>Smartify provides free, online tools to ease your daily activities. We bring financial planning, diet scheduling, task manager, expense tracker, retirement planner all under one roof. We help you achieve your goals in most efficient and time bound fashion.<br/>We support
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[' Task Manager',3000,' ',3000,' Diet Scheduler',3000,' ',3000,' Password Keeper',3000,' ',3000,' Expense Tracker',3000,' ',3000,' Financial Buddy',3000,' ',3000,' Retirement Planner',3000,' ',3000]}
                      />
                  </Subtitle>
                  <HeroButton>
                    <Button  onMouseEnter={onHover} onMouseLeave={onHover}>
                      Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                  </HeroButton>
                </TextWrapper>
              </HeroColumn>
              <HeroColumn>
                <ImgWrapper>
                    <Img src={img} alt="herophoto"/>
                </ImgWrapper>
              </HeroColumn>
          </HeroRow>
        </HeroPart>
      </HeroContainer>
  );
};

export default HeroSection;
