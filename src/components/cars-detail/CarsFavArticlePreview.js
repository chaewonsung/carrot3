import React from 'react';
import PreviewHeader from '../common/headers/PreviewHeader';
import { PreviewGridBox } from '../common/layouts/GridBox';
import CarsCard from '../common/cards/CarsCard';
import styled from 'styled-components';
import { media, rem } from '../../lib/styles/variables';

const CarsFavArticlePreviewBlock = styled.section`
  margin-top: ${rem(30)};
  ${media('large')} {
    margin-top: ${rem(20)};
  }
`;

const CarsFavArticlePreview = () => {
  return (
    <CarsFavArticlePreviewBlock>
      <PreviewHeader heading="인기 중고차 게시글" />
      <PreviewGridBox>
        {Array.from({ length: 6 }, (_, i) => (i % 10) + 1).map(
          (imgIndex, index) => (
            <CarsCard key={index} imgIndex={imgIndex} />
          )
        )}
      </PreviewGridBox>
    </CarsFavArticlePreviewBlock>
  );
};

export default CarsFavArticlePreview;
