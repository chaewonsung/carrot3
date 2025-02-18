import React from 'react';
import styled from 'styled-components';
import { media, rem } from '../../../lib/styles/variables';
import palette from '../../../lib/styles/palette';
import { Link } from 'react-router-dom';
import { IconSwiperNext } from '../Icons';

const PreviewHeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(30)} 0;
  h2 {
    font-size: ${rem(24)};
    font-weight: 600;
  }
  a {
    color: ${palette.carrot[5]};
    &:hover {
      text-decoration: underline;
    }
    .icon-swiper-next {
      margin-left: 0.3em;
    }
  }
  ${media('large')} {
    h2 {
      font-size: ${rem(20)};
    }
    a {
      font-size: ${rem(14)};
    }
  }
`;

const PreviewHeader = ({ heading }) => {
  return (
    <PreviewHeaderBlock>
      <h2>{heading}</h2>
      <Link>
        더 구경하기
        <IconSwiperNext />
      </Link>
    </PreviewHeaderBlock>
  );
};

export default PreviewHeader;
