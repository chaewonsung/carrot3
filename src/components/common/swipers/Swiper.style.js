import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import palette from '../../../lib/styles/palette';
import { media } from '../../../lib/styles/variables';

export const WhiteSwiper = styled(Swiper)`
  --swiper-theme-color: ${palette.gray[0]};
  --swiper-pagination-bullet-inactive-color: ${palette.gray[0]};
`;

export const GoodsSwiper = styled(WhiteSwiper)`
  --swiper-navigation-size: 32px;
  --swiper-pagination-bottom: 15px;
  img {
    width: 100%;
    aspect-ratio: 1/1;
  }
  ${media('medium')} {
    margin: 0 calc(var(--inner-padding) * -1);
  }
`;
