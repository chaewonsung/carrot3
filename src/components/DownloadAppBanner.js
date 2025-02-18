import styled from 'styled-components';
import Inner from './common/layouts/Inner';
import palette from '../lib/styles/palette';
import { media, rem } from '../lib/styles/variables';
import BtnDownloadApp from './common/buttons/BtnDownloadApp';

const DownloadAppBannerBlock = styled.section`
  background-color: ${palette.carrot[0]};
  overflow: hidden;
  .content {
    position: relative;
    padding: 100px 0;
  }
  .text {
    position: relative;
    z-index: 1;
    font-weight: 700;
    p:nth-of-type(1) {
      font-size: ${rem(32)};
      color: ${palette.carrot[6]};
      margin-bottom: ${rem(15)};
    }
    p:nth-of-type(2) {
      font-size: ${rem(42)};
      margin-bottom: ${rem(25)};
    }
    img {
      height: ${rem(40)};
    }
  }
  .app-img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 560px;
  }

  ${media('large')} {
    .text {
      p:nth-of-type(2) {
        font-size: ${rem(34)};
      }
    }
    .app-img {
      width: 460px;
    }
  }
  ${media('medium')} {
    .content {
      padding: 70px 0;
    }
    .text {
      p:nth-of-type(1) {
        font-size: ${rem(24)};
        margin-bottom: ${rem(10)};
      }
      p:nth-of-type(2) {
        font-size: ${rem(26)};
      }
      img {
        height: ${rem(32)};
      }
    }
    .app-img {
      width: 400px;
    }
  }
  ${media('small')} {
    .inner {
      padding: 0;
    }
    .content {
      padding: 60px 0 200px;
    }
    .text {
      text-align: center;
      padding-bottom: ${rem(40)};
      background: linear-gradient(
        to bottom,
        ${palette.carrot[0]} 80%,
        transparent
      );
      p:nth-of-type(1) {
        font-size: ${rem(18)};
        margin-bottom: ${rem(10)};
      }
      p:nth-of-type(2) {
        margin-bottom: ${rem(20)};
      }
    }
    .app-img {
      right: 50%;
      transform: translateX(50%);
      width: 100%;
      max-width: 360px;
    }
  }
`;

const DownloadAppBanner = () => {
  return (
    <DownloadAppBannerBlock>
      <Inner>
        <div className="content">
          <div className="text">
            <p>당근에서 가까운 이웃과 함께해요.</p>
            <p>지금 바로 다운로드하기</p>
            <BtnDownloadApp type="image" />
          </div>
          <img
            className="app-img"
            src="/images/download_app_screen.webp"
            alt=""
          />
        </div>
      </Inner>
    </DownloadAppBannerBlock>
  );
};

export default DownloadAppBanner;
