import React from 'react';
import PreviewHeader from '../common/headers/PreviewHeader';
import { PreviewGridBox } from '../common/layouts/GridBox';
import BuySellGoodsCard from '../common/cards/BuySellGoodsCard';
import GoodsPreviewLayout from '../common/market/GoodsPreviewLayout';

const BuySellUserGoodsPreview = () => {
  return (
    <GoodsPreviewLayout>
      <PreviewHeader heading="황채원 의 판매물품" />
      <PreviewGridBox>
        {Array.from({ length: 6 }, (_, i) => (i % 10) + 1).map(
          (imgIndex, index) => (
            <BuySellGoodsCard key={index} imgIndex={imgIndex} />
          )
        )}
      </PreviewGridBox>
    </GoodsPreviewLayout>
  );
};

export default BuySellUserGoodsPreview;
