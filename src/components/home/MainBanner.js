import React, { useEffect, useRef, useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Inner from '../common/layouts/Inner';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { rem } from '../../lib/styles/variables';

const SLIDES = [
  {
    title: '믿을만한\n이웃 간 중고거래',
    subTitle: '동네 주민들과 가깝고 따뜻한 거래를\n지금 경험해보세요.',
    bgColor: '#FFF1AA',
  },
  {
    title: '동네 이웃들이\n자주 가는 동네 업체',
    subTitle: '우리 동네 사람들이\n이용하는 업체를 찾아보세요.',
    bgColor: '#FFE2D2',
  },
  {
    title: '우리 동네에서 찾는\n당근알바',
    subTitle: '걸어서 10분 거리의\n동네 알바들 여기 다 있어요.',
    bgColor: '#FFE2D2',
  },
  {
    title: '복비 없이 투명한\n부동산 직거래',
    subTitle: '이웃이 살던 집, 당근에서\n편하게 직거래 해보세요.',
    bgColor: '#E3EFF9',
  },
  {
    title: '딜러 수수료 없는\n중고차 직거래',
    subTitle: '딜러 없이 믿고 살 수 있는 중고차,\n당근에서 직거래 해보세요.',
    bgColor: '#DAF4FF',
  },
];

const MainBannerBlock = styled.section`
  .content {
    position: relative;
    overflow: hidden;
    transition: background-color 0.2s;
  }
`;

const SwiperBlock = styled(Swiper)`
  --swiper-navigation-size: 30px;
  --swiper-navigation-color: ${palette.gray[9]};

  --swiper-pagination-color: ${palette.gray[9]};
  --swiper-pagination-bullet-inactive-color: ${palette.gray[9]};
  --swiper-pagination-bullet-width: 7px;
  --swiper-pagination-bullet-height: 7px;
  --swiper-pagination-bottom: 30px;

  height: 470px;

  .swiper-pagination {
    width: auto !important;
    padding: 0 80px;
  }
`;

const Slide = styled(SwiperSlide)`
  white-space: pre;
  font-weight: 600;
  padding: 0 80px;
  p:first-child {
    font-size: 42px;
    line-height: 1.3;
    margin: 50px 0 20px;
  }
  p:last-child {
    font-size: ${rem(20)};
    line-height: 1.5;
  }
`;

const MainBanner = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <MainBannerBlock
      style={{
        backgroundColor: SLIDES[activeSlideIndex].bgColor,
      }}
    >
      <Inner>
        <div className="content">
          <SwiperBlock
            speed={600}
            modules={[Pagination, Navigation]}
            pagination={true}
            navigation={true}
            onRealIndexChange={(swiper) =>
              setActiveSlideIndex(swiper.realIndex)
            }
          >
            {SLIDES.map((slide) => (
              <Slide key={slide.title}>
                <p>{slide.title}</p>
                <p>{slide.subTitle}</p>
              </Slide>
            ))}
          </SwiperBlock>
          <SwiperImages activeSlideIndex={activeSlideIndex} />
        </div>
      </Inner>
    </MainBannerBlock>
  );
};

const Img = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 110%;

  opacity: 0;
  transform: translateX(-10%);
  transition: 0.5s;
  &.active {
    opacity: 0.99;
    transform: translateX(0);
  }
  &.active + img {
    transform: translateX(0);
  }
`;

const SwiperImages = ({ activeSlideIndex }) => {
  const nextSlideRef = useRef(null);
  useEffect(() => {
    if (activeSlideIndex === SLIDES.length - 1) return;
    nextSlideRef.current.src ||= nextSlideRef.current.dataset.src;
  }, [activeSlideIndex]);
  return (
    <div>
      {SLIDES.map((slide, i) => (
        <Img
          key={slide.title}
          ref={i === activeSlideIndex + 1 ? nextSlideRef : null}
          className={i === activeSlideIndex ? 'active' : null}
          src={i ? null : `images/home_swiper_0${i + 1}.png`}
          data-src={i ? `images/home_swiper_0${i + 1}.png` : null}
          alt={`${slide.title} 이미지`}
        ></Img>
      ))}
    </div>
  );
};

export default MainBanner;
