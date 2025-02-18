import React from 'react';
import styled from 'styled-components';
import { media, rem } from '../../../lib/styles/variables';
import BtnDownloadApp from '../buttons/BtnDownloadApp';

const BtnDownloadAppWrapperBlock = styled.div`
  ${media('medium')} {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: ${rem(16)};
    background-color: #fff;
    z-index: 900;
    button {
      padding: 1em;
    }
  }
`;

const BtnDownloadAppWrapper = () => {
  return (
    <BtnDownloadAppWrapperBlock>
      <BtnDownloadApp type="darkButton" fullWidth />
    </BtnDownloadAppWrapperBlock>
  );
};

export default BtnDownloadAppWrapper;
