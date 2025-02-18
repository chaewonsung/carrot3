import React from 'react';
import styled from 'styled-components';
import GoodsCard from './GoodsCard';

const CarsCardBlock = styled(GoodsCard)`
  .car-name {
    margin-bottom: 0.4em;
    line-height: 1.5;
  }
`;

const CarsCard = ({ imgIndex }) => {
  return (
    <CarsCardBlock to="X4 M F98 3.0T xDrive 전기형 (480마력)">
      <GoodsCard.ImgBox>
        <img
          src={`/images/cars_list_thumb_${imgIndex}.jpeg`}
          loading="lazy"
          alt=""
        />
      </GoodsCard.ImgBox>
      <div className="car-name">X4 M F98 3.0T xDrive 전기형 (480마력)</div>
      <GoodsCard.Price>리스 85만원/월</GoodsCard.Price>
      <GoodsCard.Info info={['20년식', '6만km']} />
      <GoodsCard.Location location="인창동" uploadTime="20분 전" />
      <GoodsCard.Reaction chat={22} like={184} />
    </CarsCardBlock>
  );
};

export default CarsCard;
