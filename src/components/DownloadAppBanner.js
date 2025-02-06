import styled from 'styled-components';
import Inner from './common/layouts/Inner';
import palette from '../lib/styles/palette';
import { rem } from '../lib/styles/variables';
import BtnDownloadApp from './common/buttons/BtnDownloadApp';

const DownloadAppBannerBlock = styled.section`
  background-color: ${palette.carrot[0]};
  .content {
    display: flex;
    justify-content: space-between;
    height: 360px;
    overflow: hidden;
    align-items: center;
    > img {
      transform: translateY(-5%);
    }
  }
  .text {
    font-weight: 700;
    white-space: nowrap;
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
      height: 40px;
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
          <img src="images/download_app_screen.webp" width="560px" alt="" />
        </div>
      </Inner>
    </DownloadAppBannerBlock>
  );
};

export default DownloadAppBanner;
