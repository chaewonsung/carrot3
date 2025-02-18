import React from 'react';
import BuySellGoodsArticle from './BuySellGoodsArticle';
import Inner from '../common/layouts/Inner';
import BuySellUserGoodsPreview from './BuySellUserGoodsPreview';
import BuySellFavGoodsPreview from './BuySellFavGoodsPreview';
import styled from 'styled-components';
import { rem } from '../../lib/styles/variables';

const BuySellDetailBlock = styled.div`
  padding-bottom: ${rem(100)};
`;

const BuySellDetail = (props) => {
  return (
    <BuySellDetailBlock {...props}>
      <Inner>
        <BuySellGoodsArticle />
        <BuySellUserGoodsPreview />
        <BuySellFavGoodsPreview />
      </Inner>
    </BuySellDetailBlock>
  );
};

export default BuySellDetail;
