import React, { useRef, useState } from 'react';
import Inner from '../common/layouts/Inner';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { IconSwiperNext, IconSwiperPrev } from '../common/Icons';
import styled, { css } from 'styled-components';
import { mq, rem } from '../../lib/styles/variables';
import palette from '../../lib/styles/palette';

const CATEGORY_LIST = [
  '디지털기기',
  '생활가전',
  '가구/인테리어',
  '생활/주방',
  '유아동',
  '유아도서',
  '여성의류',
  '여성잡화',
  '남성패션/잡화',
  '뷰티/미용',
  '스포츠/레저',
  '취미/게임/음반',
  '도서',
  '티켓/교환권',
  '가공식품',
  '건강기능식품',
  '반려동물용품',
  '식물',
  '기타 중고물품',
  '삽니다',
];

const CategoryBlock = styled.section`
  padding: 20px 0 90px;
`;

const Heading = styled.h2`
  font-size: ${rem(24)};
  font-weight: 600;
  padding: 1em 0;
`;

const SwiperWrapper = styled.div`
  position: relative;
`;

const SwiperBlock = styled(Swiper)`
  padding: 2px;
`;

const Slide = styled(SwiperSlide)`
  text-align: center;
  width: 160px;
  a {
    height: 196px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .img-box {
    aspect-ratio: 1/1;
    background-color: ${palette.gray[2]};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    img {
      transition: 0.2s;
    }
    &:hover {
      img {
        scale: 1.05;
      }
    }
  }
  span {
    font-weight: 500;
    font-size: ${rem(14)};
    line-height: 1.6;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 30px;
  z-index: 1;

  opacity: ${({ hide }) => (hide ? 0 : 0.999)};
  transition: opacity 0.2s;
`;
const PrevOverlay = styled(Overlay)`
  left: 0;
  transform: translateX(-50%);
  background: linear-gradient(to right, white 70%, transparent);
`;
const NextOverlay = styled(Overlay)`
  right: 0;
  transform: translateX(50%);
  background: linear-gradient(to left, white 70%, transparent);
`;

const NavButton = styled.button`
  position: absolute;
  top: calc(160px / 2); // 이미지 박스 높이 / 2
  left: 50%;
  background-color: ${palette.gray[0]};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 3px 5px ${palette.gray[4] + '30'};
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);

  /* swiper hover animation */
  opacity: 0;
  transition: opacity 0.2s;
  ${SwiperWrapper}:hover & {
    opacity: 0.999;
  }
`;

const swiperProps = {
  slidesPerView: 'auto',
  slidesPerGroupAuto: true,
  spaceBetween: 15,
  speed: 800,
  allowTouchMove: true,
  slidesOffsetAfter: 16,
  slidesOffsetBefore: 16,
  breakpoints: {
    [mq.tablet]: {
      allowTouchMove: false,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
    },
  },
};

const Category = () => {
  const swiperRef = useRef(null);
  const prevOverlayRef = useRef(null);
  const nextOverlayRef = useRef(null);

  const [isSwiperBeginning, setIsSwiperBeginning] = useState(true);
  const [isSwiperEnd, setIsSwiperEnd] = useState(false);

  const onSlideChangeTransitionStart = () => {
    setIsSwiperBeginning(false);
    setIsSwiperEnd(false);
  };
  const onSlideChangeTransitionEnd = (swiper) => {
    if (swiper.isBeginning) {
      setIsSwiperBeginning(true);
    } else if (swiper.isEnd) setIsSwiperEnd(true);
  };
  return (
    <CategoryBlock>
      <Inner>
        <Heading>인기 카테고리</Heading>
        <SwiperWrapper>
          <SwiperBlock
            {...swiperProps}
            ref={swiperRef}
            onSlideChangeTransitionStart={onSlideChangeTransitionStart}
            onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
          >
            {CATEGORY_LIST.map((item, i) => (
              <Slide key={item}>
                <Link>
                  <div className="img-box">
                    <img
                      src={`images/home_category_${`${i + 1}`.padStart(
                        2,
                        '0'
                      )}.png`}
                      alt=""
                      width="50%"
                      loading="lazy"
                    />
                  </div>
                  <span>{item}</span>
                </Link>
              </Slide>
            ))}
          </SwiperBlock>
          <PrevOverlay ref={prevOverlayRef} hide={isSwiperBeginning}>
            <NavButton onClick={() => swiperRef.current?.swiper.slidePrev()}>
              <IconSwiperPrev $fz="1.3em" />
            </NavButton>
          </PrevOverlay>
          <NextOverlay ref={nextOverlayRef} hide={isSwiperEnd}>
            <NavButton onClick={() => swiperRef.current?.swiper.slideNext()}>
              <IconSwiperNext $fz="1.3em" />
            </NavButton>
          </NextOverlay>
        </SwiperWrapper>
      </Inner>
    </CategoryBlock>
  );
};

export default Category;
