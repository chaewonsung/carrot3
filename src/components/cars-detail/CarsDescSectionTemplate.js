import React from 'react';
import styled from 'styled-components';
import { media, rem } from '../../lib/styles/variables';

const CarsDescSectionTemplateBlock = styled.section`
  padding: ${rem(30)} 0;
  h2 {
    font-size: ${rem(20)};
    font-weight: 600;
    margin-bottom: ${rem(20)};
  }

  ${media('small')} {
    padding: ${rem(20)} 0;
    h2 {
      font-size: 1rem;
    }
  }
`;

const CarsDescSectionTemplate = ({ children, heading }) => {
  return (
    <CarsDescSectionTemplateBlock>
      <h2>{heading}</h2>
      {children}
    </CarsDescSectionTemplateBlock>
  );
};

export default CarsDescSectionTemplate;
