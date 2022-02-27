import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Very Good', text: 'on my Graduation Project'},
  { number: 'Good', text: 'on my Computer Science Engineering bachelor degree', },
  { number: 2010, text: 'SAT Score', },
  { number: 'Head', text: 'Of Jornalism in Insider GUC', },
  { number: 'Completed', text: 'An Embedded Systems course offered by UTAustinX', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;