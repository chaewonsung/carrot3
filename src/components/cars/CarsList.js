import React from 'react';
import { ResponsiveGridBox } from '../common/layouts/GridBox';
import GoodsListLayout from '../common/market/GoodsListLayout';
import BtnMarketMoreView from '../common/buttons/BtnMarketMoreView';
import CarsCard from '../common/cards/CarsCard';

const CarsList = () => {
  return (
    <GoodsListLayout>
      <ResponsiveGridBox min="220px" gap="50px 15px">
        {Array.from({ length: 60 }, (_, i) => (i % 10) + 1).map(
          (imgIndex, index) => (
            <CarsCard key={index} imgIndex={imgIndex} />
          )
        )}
      </ResponsiveGridBox>
      <BtnMarketMoreView />
    </GoodsListLayout>
  );
};

export default CarsList;
