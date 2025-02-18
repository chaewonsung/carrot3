import React from 'react';
import Breadcrumb from '../Breadcrumb';
import styled from 'styled-components';
import { media, rem } from '../../../lib/styles/variables';

const MarketHeadingBlock = styled.div`
  padding: ${rem(50)} 0;

  h1 {
    font-size: ${rem(28)};
    font-weight: 600;
    margin-top: ${rem(15)};
  }

  ${media('medium')} {
    padding: ${rem(30)} 0 ${rem(40)};
    h1 {
      font-size: ${rem(24)};
    }
  }
  ${media('small')} {
    padding-top: ${rem(20)};
  }
`;

const MarketHeading = ({ market }) => {
  return (
    <MarketHeadingBlock>
      <Breadcrumb navList={[{ name: '홈', path: '/' }, { name: market }]} />
      <h1>경기도 구리시 {market}</h1>
    </MarketHeadingBlock>
  );
};

export default MarketHeading;
