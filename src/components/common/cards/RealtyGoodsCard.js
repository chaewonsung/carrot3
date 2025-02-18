import React from 'react';
import styled from 'styled-components';
import GoodsCard, { GoodsCardImgBox } from './GoodsCard';
import { IconChat, IconHeartFill } from '../Icons';
import palette from '../../../lib/styles/palette';
import { media, rem } from '../../../lib/styles/variables';

const RealtyGoodsCardBlock = styled(GoodsCard)`
  .middot {
    margin: 0 0.2em;
  }
  .type {
    color: ${palette.gray[8]};
    margin-bottom: 0.7em;
  }
  .price {
    font-size: ${rem(20)};
    font-weight: 600;
    margin-bottom: 0.5em;
  }
  .size {
    margin-bottom: 0.7em;
  }
  .info {
    margin-bottom: 1em;
  }
  .location {
    margin-bottom: 0.5em;
  }

  .reaction {
    .bi {
      color: ${palette.gray[4]};
      margin-right: 0.3em;
    }
    .icon-heart-fill {
      transform: translateY(0.5px);
    }
  }

  .info,
  .location,
  .reaction {
    color: ${palette.gray[7]};
    font-size: ${rem(14)};
  }

  ${media('small')} {
    .type,
    .size {
      font-size: ${rem(14)};
    }
    .price {
      font-size: ${rem(16)};
    }
    .info,
    .location,
    .reaction {
      font-size: ${rem(12)};
    }
  }
`;

const RealtyGoodsCard = ({ imgIndex }) => {
  return (
    <RealtyGoodsCardBlock to="분리형 원룸">
      <GoodsCardImgBox>
        <img
          src={`/images/realty_list_thumb_${imgIndex}.jpeg`}
          loading="lazy"
          alt=""
        />
      </GoodsCardImgBox>
      <div className="type">분리형 원룸</div>
      <div className="price">월세 1,500 / 30</div>
      <div className="size">
        9.7평<i className="middot">&middot;</i>4층
      </div>
      <div className="info">
        관리비 없음<i className="middot">&middot;</i>선릉역5분거리
      </div>
      <div className="location">
        대치동<i className="middot">&middot;</i>1개월 전
      </div>
      <div className="reaction">
        <IconChat />0<i className="middot">&middot;</i>
        <IconHeartFill />1
      </div>
    </RealtyGoodsCardBlock>
  );
};

export default RealtyGoodsCard;
