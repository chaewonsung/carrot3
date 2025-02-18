import React, { useState } from 'react';
import { ButtonSymbol, ButtonSymbolDark } from './Button.style';
import styled from 'styled-components';
import { media, rem } from '../../../lib/styles/variables';
import ModalTemplate from '../modal/ModalTemplate';
import ModalDownloadApp from '../modal/ModalDownloadApp';
import { IconSwiperNext } from '../Icons';
import palette from '../../../lib/styles/palette';

const ButtonCarsCustom = styled.button`
  text-decoration: underline;
  color: ${palette.gray[8]};
  margin-top: 0.9em;
  .bi {
    margin-left: 0.2em;
  }

  ${media('small')} {
    font-size: ${rem(14)};
  }
`;

const BtnDownloadApp = ({ type, ...props }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(true);

  return (
    <>
      {type === 'lightButton' && (
        <ButtonSymbol fw="600" {...props} onClick={handleClick}>
          앱 다운로드
        </ButtonSymbol>
      )}
      {type === 'darkButton' && (
        <ButtonSymbolDark fw="600" onClick={handleClick} {...props}>
          {props.children || '당근 앱에서 보기'}
        </ButtonSymbolDark>
      )}
      {type === 'image' && (
        <div onClick={handleClick}>
          <img
            src="/images/download_app_ios.svg"
            alt=""
            style={{ marginRight: rem(5) }}
          />
          <img src="/images/download_app_android.svg" alt="" />
        </div>
      )}
      {type === 'carsCustom' && (
        <ButtonCarsCustom onClick={handleClick}>
          {props.children}
          <IconSwiperNext />
        </ButtonCarsCustom>
      )}
      <ModalTemplate
        showModal={showModal}
        setShowModal={setShowModal}
        header="QR 코드 스캔"
      >
        <ModalDownloadApp />
      </ModalTemplate>
    </>
  );
};

export default BtnDownloadApp;
