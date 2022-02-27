import React from 'react';
import { DiFirebase, DiReact, DiZend, DiAptana } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I worked with a lot of technologies in my tenure so far a Computer Science Engineer. Mainly Frontend web and app
      development. But I have experience in many other realms of Computer Science Engineering including BackEnd Web Development,
      Embedded Software Engineering, Chatbot Development and much more.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js<br/> 
            React Native<br/> 
            Angular<br/> 
            Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node<br/> 
            Django<br /> 
            Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiAptana size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other</ListTitle>
          <ListParagraph>
            Experience with <br />
            chatbot development using Cognigy.AI<br />
            And in Embedded Engineering using Embedded C.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
