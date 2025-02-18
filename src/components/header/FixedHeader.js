import React, { useCallback, useEffect, useRef, useState } from 'react';
import Inner from '../common/layouts/Inner';
import styled, { css } from 'styled-components';
import Logo from '../common/Logo';
import Gnb from './Gnb';
import BtnSearch from '../common/buttons/BtnSearch';
import { rem } from '../../lib/styles/variables';
import BtnDownloadApp from '../common/buttons/BtnDownloadApp';
import classNames from 'classnames';
import { Medium, NotMedium } from '../common/layouts/Responsive';
import { throttle } from 'lodash';
import { IconClose, IconMenu } from '../common/Icons';
import palette from '../../lib/styles/palette';
import BtnChangeAddress from './BtnChangeAddress';

const FixedHeaderBlock = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: #fff;

  .header-content {
    height: var(--fixed-header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 64px;
  }
`;

const FixedHeader = ({
  showSearch,
  setShowSearch,
  showFullHeader,
  setShowFullHeader,
}) => {
  const [isScrolling, setisScrolling] = useState(false);

  return (
    <>
      <FixedHeaderBlock
        style={{
          borderBottom:
            isScrolling &&
            !showSearch &&
            !showFullHeader &&
            `1px solid ${palette.gray[2]}`,
        }}
      >
        <Inner>
          <div className="header-content">
            <div className="logo">
              <Logo />
            </div>
            <NotMedium>
              <Gnb />
            </NotMedium>
            <Buttons
              isScrolling={isScrolling}
              setisScrolling={setisScrolling}
              setShowSearch={setShowSearch}
              showFullHeader={showFullHeader}
              setShowFullHeader={setShowFullHeader}
            />
          </div>
        </Inner>
      </FixedHeaderBlock>
    </>
  );
};

const ButtonsBlock = styled.div`
  display: flex;
  gap: ${rem(10)};
  align-items: center;

  ${BtnChangeAddress.style} {
    padding: 0.7em 1em;

    transform: translateX(40px);
    transition: 0.2s;
  }

  ${BtnSearch.style} {
    padding: 0.2em 0.35rem;
    font-size: 1.4em;

    transition: 0.2s;
    opacity: 0;
    visibility: hidden;
  }

  &.scrolled {
    ${BtnChangeAddress.style} {
      transform: translateX(0);
    }
    ${BtnSearch.style} {
      opacity: 1;
      visibility: visible;
    }
  }

  &.minimize {
    ${BtnChangeAddress.style}, ${BtnSearch.style} {
      opacity: 0;
    }
  }
`;

const BtnMenu = styled.button`
  position: relative;
  width: 30px;
  height: 30px;
  > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Buttons = ({
  isScrolling,
  setisScrolling,
  setShowSearch,
  showFullHeader,
  setShowFullHeader,
}) => {
  const handleScroll = useCallback(
    throttle(() => {
      if (!isScrolling && window.scrollY > 100) {
        setisScrolling(true);
      } else if (isScrolling && window.scrollY <= 100) {
        setisScrolling(false);
      }
    }, 200),
    [isScrolling]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <ButtonsBlock
      className={classNames({
        scrolled: isScrolling,
        minimize: showFullHeader,
      })}
    >
      <NotMedium>
        <BtnSearch onClick={() => setShowSearch((prev) => !prev)} />
        <BtnDownloadApp type="lightButton" fz={rem(14)} />
      </NotMedium>
      <Medium>
        <BtnChangeAddress />
        <BtnSearch onClick={() => setShowSearch((prev) => !prev)} />
        <BtnMenu onClick={() => setShowFullHeader((prev) => !prev)}>
          <IconClose $fz="1.8em" style={{ opacity: showFullHeader ? 1 : 0 }} />
          <IconMenu $fz="2.2em" style={{ opacity: showFullHeader ? 0 : 1 }} />
        </BtnMenu>
      </Medium>
    </ButtonsBlock>
  );
};

export default FixedHeader;
