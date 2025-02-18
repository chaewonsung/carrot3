import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media, rem } from '../../lib/styles/variables';
import palette from '../../lib/styles/palette';
import { GoodsReactionStats } from '../common/market/GoodsArticleLayout';

const BuySellGoodsDescBlock = styled.div``;

const GoodsName = styled.h1`
  font-size: ${rem(26)};
  font-weight: 700;
  margin-bottom: 0.8em;
  ${media('large')} {
    font-size: ${rem(24)};
  }
  ${media('small')} {
    font-size: ${rem(20)};
  }
`;

const GoodsCategory = styled.div`
  color: ${palette.gray[7]};
  margin-bottom: 3em;
  a {
    text-decoration: underline;
  }
  ${media('large')} {
    font-size: ${rem(15)};
  }
  ${media('small')} {
    font-size: ${rem(13)};
  }
`;

const GoodsPrice = styled.div`
  font-weight: 700;
  font-size: ${rem(24)};
  ${media('large')} {
    font-size: ${rem(20)};
  }
  ${media('small')} {
    font-size: ${rem(18)};
  }
`;

const GoodsIntro = styled.p`
  line-height: 1.5;
  margin: 1.1em 0;
  font-size: ${rem(18)};
  white-space: pre-line;
  ${media('large')} {
    font-size: ${rem(16)};
  }
  ${media('medium')} {
    font-size: ${rem(18)};
  }
  ${media('small')} {
    font-size: ${rem(16)};
  }
`;

const BuySellGoodsDesc = () => {
  return (
    <BuySellGoodsDescBlock>
      <GoodsName>VOV 보브 울캐시미어 니트</GoodsName>
      <GoodsCategory>
        <Link>여성의류</Link> · 끌올 6분 전
      </GoodsCategory>
      <GoodsPrice>33,000원</GoodsPrice>
      <GoodsIntro>
        {`보브 울캐시미어 니트 프리사이즈입니다.
니트는 슬림하게 나와서 55-55반 분들까지 예쁘게 입으실 수 있을 것 같아요. 

소매가 나팔로 길게 빠져 엄청 여성스럽고 예뻐요! 실착용 3회 정도로 상태도 좋습니다.

3호선 압구정역 ~ 한일관 근처 직거래 가능하며, 운비 부담시 일반/반값택배 가능합니다.`}
      </GoodsIntro>
      <GoodsReactionStats chat={1} like={5} look={23} />
    </BuySellGoodsDescBlock>
  );
};

export default BuySellGoodsDesc;
