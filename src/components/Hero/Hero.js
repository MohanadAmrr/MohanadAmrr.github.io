import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          My name is Mohanad Amr, and Welcome To My Personal Portfolio<br />
          
        </SectionTitle>
        <SectionText>
        Where I show you a recap of my experience as a frontend developer, my projects, accomplishments, and some background information on me using React.js and Next.Js
        </SectionText>
        <Button onClick={() => window.location ='https://www.linkedin.com/in/mohanad-barakat-0b7a34223/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;