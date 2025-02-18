import React from 'react';
import palette from '../../../lib/styles/palette';
import { rem } from '../../../lib/styles/variables';
import styled from 'styled-components';

const ModalDownloadAppBlock = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${rem(30)};
  text-align: center;
  padding: var(--modal-template-padding);
  h3 {
    font-size: ${rem(28)};
    font-weight: 600;
  }
  p {
    line-height: 1.5;
    color: ${palette.gray[8]};
  }
`;

const ModalDownloadApp = () => {
  return (
    <ModalDownloadAppBlock>
      <h3>당근 앱으로 열기</h3>
      <img
        src="/images/download_app_qr.svg"
        alt="앱 설치 큐알코드"
        width="210px"
        height="210px"
      />
      <p>
        모바일에서만 이용할 수 있어요.
        <br />
        휴대전화의 카메라 또는 당근 앱으로 QR코드를 촬영해주세요.
      </p>
    </ModalDownloadAppBlock>
  );
};

export default ModalDownloadApp;
