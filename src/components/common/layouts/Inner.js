import React from 'react';
import styled from 'styled-components';
import { media } from '../../../lib/styles/variables';

const InnerBlock = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 64px;
  box-sizing: content-box;
  ${media('laptop')} {
    padding: 0 40px;
  }
  ${media('tablet')} {
    padding: 0 16px;
  }
`;

const Inner = ({ children }) => {
  return <InnerBlock>{children}</InnerBlock>;
};

export default Inner;
