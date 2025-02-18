import React from 'react';
import MainLayout from './MainLayout';
import BtnDownloadApp from '../components/common/buttons/BtnDownloadApp';
import styled from 'styled-components';
import Inner from '../components/common/layouts/Inner';
import { rem } from '../lib/styles/variables';
import palette from '../lib/styles/palette';

const RealtyDetailPageBlock = styled(Inner)`
  padding-block: ${rem(100)};
  text-align: center;
  p {
    color: ${palette.gray[7]};
    line-height: 1.8;
    margin: 2em 0;
  }
`;

const RealtyDetailPage = () => {
  return (
    <MainLayout noGlobalSearch>
      <RealtyDetailPageBlock>
        <img src="/images/logo_simple.svg" alt="" />
        <p>
          당근 앱으로 이동할게요.
          <br />
          자동으로 연결이 안되면 아래 앱에서 보기 버튼을 눌러주세요.
        </p>
        <BtnDownloadApp type="darkButton">앱에서 보기</BtnDownloadApp>
      </RealtyDetailPageBlock>
    </MainLayout>
  );
};

export default RealtyDetailPage;
