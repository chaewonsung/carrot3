import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';
import { rem } from '../../../lib/styles/variables';
import GoodsCard, { GoodsCardImgBox } from './GoodsCard';

const BuySellGoodsCardBlock = styled(GoodsCard)`
  h2 {
    margin-bottom: ${rem(10)};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .price {
    font-weight: 600;
    margin-bottom: ${rem(20)};
  }
  .address {
    color: ${palette.gray[8]};
    font-size: ${rem(13)};
  }
`;

const BuySellGoodsCard = ({ imgIndex }) => {
  return (
    <BuySellGoodsCardBlock to="타원형 좌식 테이블">
      <GoodsCardImgBox>
        <img
          src={`/images/buy_sell_list_thumb_${imgIndex}.jpg`}
          loading="lazy"
          alt=""
        />
      </GoodsCardImgBox>
      <h2>타원형 좌식 테이블</h2>
      <div className="price">33,000원</div>
      <div className="address">인창동</div>
    </BuySellGoodsCardBlock>
  );
};

export default BuySellGoodsCard;
