import React from 'react';
import { BreadcrumbForGoodsDetail } from '../common/Breadcrumb';
import GoodsArticleLayout from '../common/market/GoodsArticleLayout';
import { GoodsSwiper } from '../common/swipers/Swiper.style';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { UserInfoForGoodsArticle } from '../common/UserInfo';
import CarsGoodsDesc from './CarsDesc';
import BtnDownloadAppWrapper from '../common/market/BtnDownloadAppWrapper';
import styled from 'styled-components';
import { media } from '../../lib/styles/variables';

const CarsArticleBlock = styled(GoodsArticleLayout)`
  ${media('medium')} {
    border-bottom: none !important;
  }
`;

const CarsArticle = () => {
  return (
    <>
      <BreadcrumbForGoodsDetail
        navList={[
          { name: '홈', path: '/' },
          { name: '중고차', path: '/cars' },
          { name: 'X4 M F98 3.0T xDrive 전기형 (480마력)' },
        ]}
      />
      <CarsArticleBlock>
        <div>
          <GoodsSwiper
            modules={[Pagination, Navigation]}
            pagination={true}
            navigation={true}
            lazyPreloadPrevNext={true}
          >
            {[...new Array(5)].map((_, i) => (
              <SwiperSlide key={i}>
                <img
                  loading="lazy"
                  src={`/images/cars_detail_${i + 1}.png`}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </GoodsSwiper>
          <UserInfoForGoodsArticle />
        </div>
        <div>
          <CarsGoodsDesc />
          <BtnDownloadAppWrapper />
        </div>
      </CarsArticleBlock>
    </>
  );
};

export default CarsArticle;
