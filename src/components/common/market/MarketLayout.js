import React from 'react';
import styled from 'styled-components';
import Inner from '../layouts/Inner';
import { media, rem } from '../../../lib/styles/variables';
import MarketHeading from './MarketHeading';

const MarketLayoutBlock = styled.section`
  .filter {
    float: left;
    width: 242px;
    margin-right: ${rem(30)};

    ${media('large')} {
      width: 198px;
    }
  }
`;

const MarketLayout = ({ market, children }) => {
  return (
    <MarketLayoutBlock>
      <Inner>
        <MarketHeading market={market} />
        <section>{children}</section>
      </Inner>
    </MarketLayoutBlock>
  );
};

export default MarketLayout;
