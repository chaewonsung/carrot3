import React from 'react';

import { ResponsiveGridBox } from '../common/layouts/GridBox';
import BuySellGoodsCard from '../common/cards/BuySellGoodsCard';
import BtnMarketMoreView from '../common/buttons/BtnMarketMoreView';
import GoodsListLayout from '../common/market/GoodsListLayout';

const BuySellGoodsList = () => {
  return (
    <GoodsListLayout>
      <ResponsiveGridBox min="185px" gap="50px 15px">
        {Array.from({ length: 60 }, (_, i) => (i % 10) + 1).map(
          (imgIndex, index) => (
            <BuySellGoodsCard key={index} imgIndex={imgIndex} />
          )
        )}
      </ResponsiveGridBox>
      <BtnMarketMoreView />
    </GoodsListLayout>
  );
};

export default BuySellGoodsList;
