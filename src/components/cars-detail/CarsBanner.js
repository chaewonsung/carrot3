import React from 'react';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import styled from 'styled-components';
import { media, rem } from '../../lib/styles/variables';

const CarsBannerBlock = styled.div`
  display: none;
  background-color: #ebf7fa;
  border-radius: 10px;
  padding: ${rem(24)};
  ${media('medium')} {
    display: flex;
    align-items: center;
    gap: ${rem(15)};
    p {
      flex: 1;
      line-height: 1.5;
      font-weight: 600;
    }
  }

  ${media('small')} {
    flex-direction: column;
    align-items: flex-start;
    padding: ${rem(16)};
    svg {
      display: none;
    }
    p {
      font-size: ${rem(14)};
    }
  }
`;

const CarsBanner = () => {
  return (
    <CarsBannerBlock>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="60"
        height="49"
        fill="none"
        viewBox="0 0 60 49"
        aria-label="중고차 로고"
        class=""
      >
        <path fill="url(#icon_banner_car_svg__a)" d="M0 0h60v49H0z"></path>
        <defs>
          <pattern
            id="icon_banner_car_svg__a"
            width="1"
            height="1"
            patternContentUnits="objectBoundingBox"
          >
            <use
              href="#icon_banner_car_svg__b"
              transform="matrix(.00716 0 0 .00877 -.001 0)"
            ></use>
          </pattern>
          <image
            href="data:image/png;base64,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"
            id="icon_banner_car_svg__b"
            width="140"
            height="114"
          ></image>
        </defs>
      </svg>
      <p>
        딜러 없이 믿고 살 수 있는 중고차,
        <br />
        당근에서 직거래해보세요.
      </p>
      <BtnDownloadApp type="darkButton" />
    </CarsBannerBlock>
  );
};

export default CarsBanner;
