import React from 'react';
import { ResponsiveGridBox } from '../common/layouts/GridBox';
import RealtyGoodsCard from '../common/cards/RealtyGoodsCard';
import BtnMarketMoreView from '../common/buttons/BtnMarketMoreView';
import GoodsListLayout from '../common/market/GoodsListLayout';

const RealtyGoodsList = () => {
  return (
    <GoodsListLayout>
      <ResponsiveGridBox min="220px" gap="50px 15px">
        {Array.from({ length: 60 }, (_, i) => (i % 10) + 1).map(
          (imgIndex, index) => (
            <RealtyGoodsCard key={index} imgIndex={imgIndex} />
          )
        )}
      </ResponsiveGridBox>
      <BtnMarketMoreView />
    </GoodsListLayout>
  );
};

export default RealtyGoodsList;
