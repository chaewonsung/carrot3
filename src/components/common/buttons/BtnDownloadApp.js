import React from 'react';
import { BtnSymbol, BtnSymbolDark } from './Button.style';
import styled from 'styled-components';
import { rem } from '../../../lib/styles/variables';

const LightButtonType = styled(BtnSymbol)`
  font-size: ${rem(14)};
`;

const ImageType = styled.div`
  display: flex;
  gap: 5px;
`;

const BtnDownloadApp = ({ type }) => {
  return (
    <>
      {type === 'lightButton' && (
        <LightButtonType fw="600">앱 다운로드</LightButtonType>
      )}
      {type === 'darkButton' && (
        <BtnSymbolDark fullWidth={true} fw="600">
          당근 앱에서 보기
        </BtnSymbolDark>
      )}
      {type === 'image' && (
        <ImageType>
          <img src="images/download_app_ios.svg" alt="" />
          <img src="images/download_app_android.svg" alt="" />
        </ImageType>
      )}
      {/* {showModal && (
        <ModalContainer header="QR 코드 스캔" setShowModal={setShowModal}>
          <ModalDownloadApp />
        </ModalContainer>
      )} */}
    </>
  );
};

export default BtnDownloadApp;
