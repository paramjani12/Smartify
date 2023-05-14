import React from 'react';
import {FeatureContainer,FeatureH1,FeatureWrapper,FeatureRow,FeatureRow2,Column1,TextWrapper,TopLine,Heading,Subtitle, Column2, ImgWrap,Img } from './FeatureElements';
import img1 from '../../images/img1.svg';
import img2 from '../../images/img2.svg';
import img3 from '../../images/img3.svg';

const Feature = () => {
  return(
      <>
        <FeatureContainer id='features'>
        <FeatureH1>Our Features</FeatureH1>
            <FeatureWrapper>
                <FeatureRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Prioritize appropriately</TopLine>
                            <Heading>Flexibly Organize and Prioritize your needs</Heading>
                            <Subtitle>Staying organized can be tough! So we provide highly flexible templates where user pen down crutial tasks, financial needs, retirement planning which they tend to forget in future. We will help in organizing and prioritizing them for you.</Subtitle>  
                        </TextWrapper>  
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img1} alt="features"/>
                        </ImgWrap>
                    </Column2>
                </FeatureRow>
                <FeatureRow2>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Smart Assisstant</TopLine>
                            <Heading>24*7 available, free personal manager</Heading>
                            <Subtitle>It's time for a smart life. We run all day all night. We are on even when you fall asleep. You might think I charge heafy but no I give all these assisstance without spending a penny. Doesn't it sounds great!!!</Subtitle>  
                        </TextWrapper>  
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img2}alt="features"/>
                        </ImgWrap>
                    </Column2>
                </FeatureRow2>
                <FeatureRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>All In One</TopLine>
                            <Heading>Multi-assisstance under one roof</Heading>
                            <Subtitle>Users get help in many ways like corporate assisstance, household assisstance, financial assisstance using task managers, diet Scheduler, password keeper, expense tracker, financial buddy, retirement planner....</Subtitle>  
                        </TextWrapper>  
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img3}alt="features"/>
                        </ImgWrap>
                    </Column2>
                </FeatureRow>
            </FeatureWrapper>
        </FeatureContainer>
      </>
  );
};

export default Feature;
