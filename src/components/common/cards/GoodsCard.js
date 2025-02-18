import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { media, rem } from '../../../lib/styles/variables';
import { IconChat, IconHeartFill } from '../Icons';

const GoodsCard = styled(Link)``;

const GraySmall = css`
  color: ${palette.gray[7]};
  font-size: ${rem(14)};
  ${media('small')} {
    font-size: ${rem(12)};
  }
`;

const SpanWithMiddot = css`
  span + span {
    &::before {
      content: '·';
      margin-inline: 0.3em;
    }
  }
`;

export const GoodsCardImgBox = styled.div`
  overflow: hidden;
  aspect-ratio: 1/1;
  border-radius: 5px;
  background-color: ${palette.gray[2]};
  margin-bottom: ${rem(10)};
  border: 1px solid ${palette.gray[2]};
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: scale 0.2s;
    ${GoodsCard}:hover & {
      scale: 1.05;
    }
  }
`;

const GoodsCardPrice = styled.div`
  font-size: ${rem(20)};
  font-weight: 600;
  margin-bottom: 0.5em;
  ${media('small')} {
    font-size: ${rem(16)};
  }
`;

const GoodsCardInfoBlock = styled.div`
  margin-bottom: 0.7em;
  ${SpanWithMiddot}
  ${media('small')} {
    font-size: ${rem(14)};
  }
`;

const GoodsCardInfo = ({ info }) => (
  <GoodsCardInfoBlock>
    {info.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </GoodsCardInfoBlock>
);

const GoodsCardLocationBlock = styled.div`
  ${GraySmall}
  ${SpanWithMiddot}
  margin-bottom: 0.5em;
`;

const GoodsCardLocation = ({ location, uploadTime }) => (
  <GoodsCardLocationBlock>
    <span>{location}</span>
    <span>{uploadTime}</span>
  </GoodsCardLocationBlock>
);

const GoodsCardReactionBlock = styled.div`
  ${GraySmall}
  ${SpanWithMiddot}
  .bi {
    color: ${palette.gray[4]};
    margin-right: 0.3em;
  }
  .icon-heart-fill {
    transform: translateY(0.5px);
  }
`;

const GoodsCardReaction = ({ chat, like }) => (
  <GoodsCardReactionBlock>
    <span>
      <IconChat />
      {chat}
    </span>
    <span>
      <IconHeartFill />
      {like}
    </span>
  </GoodsCardReactionBlock>
);

GoodsCard.ImgBox = GoodsCardImgBox;
GoodsCard.Price = GoodsCardPrice;
GoodsCard.Info = GoodsCardInfo;
GoodsCard.Location = GoodsCardLocation;
GoodsCard.Reaction = GoodsCardReaction;

export default GoodsCard;
