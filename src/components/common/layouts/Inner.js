import React from 'react';
import styled from 'styled-components';
import { media } from '../../../lib/styles/variables';

const InnerBlock = styled.div`
  --inner-padding: 64px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--inner-padding);
  box-sizing: content-box;
  ${media('medium')} {
    --inner-padding: 40px;
  }
  ${media('small')} {
    --inner-padding: 16px;
  }
`;

const Inner = (props) => {
  return (
    <InnerBlock className="inner" {...props}>
      {props.children}
    </InnerBlock>
  );
};

export default Inner;
