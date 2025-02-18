import React from 'react';
import PreviewHeader from '../common/headers/PreviewHeader';
import { PreviewGridBox } from '../common/layouts/GridBox';
import BuySellGoodsCard from '../common/cards/BuySellGoodsCard';
import GoodsPreviewLayout from '../common/market/GoodsPreviewLayout';

const BuySellFavGoodsPreview = () => {
  return (
    <GoodsPreviewLayout>
      <PreviewHeader heading="인기매물" />
      <PreviewGridBox>
      {Array.from({ length: 18 }, (_, i) => (i % 10) + 1).map(
          (imgIndex, index) => (
            <BuySellGoodsCard key={index} imgIndex={imgIndex} />
          )
        )}
      </PreviewGridBox>
    </GoodsPreviewLayout>
  );
};

export default BuySellFavGoodsPreview;
