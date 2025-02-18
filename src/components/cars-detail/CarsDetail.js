import React from 'react';
import styled from 'styled-components';
import { rem } from '../../lib/styles/variables';
import Inner from '../common/layouts/Inner';
import CarsArticle from './CarsArticle';
import CarsFavArticlePreview from './CarsFavArticlePreview';
import CarsBanner from './CarsBanner';

const CarsDetailBlock = styled.div`
  padding-bottom: ${rem(100)};
`;

const CarsDetail = () => {
  return (
    <CarsDetailBlock>
      <Inner>
        <CarsArticle />
        <CarsBanner />
        <CarsFavArticlePreview />
      </Inner>
    </CarsDetailBlock>
  );
};

export default CarsDetail;
