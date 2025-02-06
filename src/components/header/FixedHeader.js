import React from 'react';
import Inner from '../common/layouts/Inner';
import styled, { css } from 'styled-components';
import Logo from '../common/Logo';
import Gnb from './Gnb';
import BtnSearch from '../common/buttons/BtnSearch';
import { rem } from '../../lib/styles/variables';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import palette from '../../lib/styles/palette';

const FixedHeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  background-color: #fff;

  .content {
    height: var(--fixed-header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 64px;
  }
  .gnb {
  }
  .buttons {
    display: flex;
    gap: ${rem(5)};
    align-items: center;
  }

  /* 스크롤 시 검색 버튼 애니메이션 */
  ${({ isScrolling }) =>
    css`
      ${BtnSearch.style} {
        transition: opacity 0.2s;
        opacity: ${isScrolling ? 1 : 0};
        visibility: ${isScrolling ? 'visible' : 'hidden'};
      }
    `}
`;

const Space = styled.div`
  height: var(--fixed-header-height);
`;

const FixedHeader = ({ isScrolling }) => {
  return (
    <>
      <FixedHeaderBlock isScrolling={isScrolling}>
        <Inner>
          <div className="content">
            <div className="logo">
              <Logo />
            </div>
            <div className="gnb">
              <Gnb />
            </div>
            <div className="buttons">
              <BtnSearch />
              <BtnDownloadApp type="lightButton" />
            </div>
          </div>
        </Inner>
      </FixedHeaderBlock>
      <Space />
    </>
  );
};

export default FixedHeader;
