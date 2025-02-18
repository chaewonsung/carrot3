import { Link } from 'react-router-dom';
import { IconArrowUpRight, IconDropdown } from '../common/Icons';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import SelectBox from '../common/styles/SelectBox';
import { rem } from '../../lib/styles/variables';
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const GnbBlock = styled.nav`
  .main-list {
    display: flex;

    &:hover > li:not(:hover) > a {
      color: ${palette.gray[8]};
    }
    > li > a {
      display: inline-block;
      padding: 0.7em;
      font-weight: 500;
      transition: color 0.2s;
    }
  }

  .alba {
    position: relative;
    .icon-dropdown {
      color: ${palette.gray[7]};
      margin-left: 0.3em;
    }
  }
`;

const AlbaList = styled(SelectBox)`
  position: absolute;
  top: 100%;
  left: 0;
  width: max-content;

  /* alba hover animation */
  transform: translateY(-10%);
  opacity: 0;
  visibility: hidden;
  transition: 0.2s;
  ${GnbBlock} .alba:hover & {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
`;

const Gnb = () => {
  return (
    <GnbBlock>
      <ul className="main-list">
        <li>
          <Link to="/buy-sell">중고거래</Link>
        </li>
        <li>
          <Link to="/realty">부동산</Link>
        </li>
        <li>
          <Link to="/cars">중고차</Link>
        </li>
        <li className="alba">
          <Link to="/">
            알바
            <button className="btn-dropdown">
              <IconDropdown $fz="0.75em" />
            </button>
          </Link>
          <AlbaList>
            <li>
              <Link>알바 검색</Link>
            </li>
            <li>
              <Link>당근알바 소개</Link>
            </li>
            <li>
              <Link>
                기업형 서비스 <IconArrowUpRight />
              </Link>
            </li>
            <li>
              <Link>
                신뢰와 안전 <IconArrowUpRight />
              </Link>
            </li>
          </AlbaList>
        </li>
        <li>
          <Link to="/">동네업체</Link>
        </li>
        <li>
          <Link to="/">동네생활</Link>
        </li>
        <li>
          <Link to="/">모임</Link>
        </li>
      </ul>
    </GnbBlock>
  );
};
Gnb.style = GnbBlock;

const FullHeaderGnbBlock = styled.nav`
  .main-list {
    > li > a,
    > li > span {
      display: inline-block;
      width: 100%;
      padding: 0.7em 0;
      font-size: ${rem(20)};
      font-weight: 600;
      transition: color 0.2s;
      &:hover {
        color: ${palette.gray[8]};
      }
    }
  }
  .alba {
    span {
      cursor: pointer;
      display: flex !important;
      justify-content: space-between;
    }

    a {
      color: ${palette.gray[8]};
      &:hover {
        color: ${palette.gray[7]};
      }
    }
    /* alba click animation */
    .icon-dropdown {
      transform: rotate(0);
      transition: all 0.2s;
    }
    ul {
      height: 0;
      transition: 0.2s;
      li {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20%);
        transition: 0.3s;
      }
      a {
        display: block;
        line-height: calc(186px / 4);
      }
    }
    &.show-list {
      .icon-dropdown {
        transform: rotate(180deg);
      }
      ul {
        height: 186px;
        li {
          opacity: 0.99;
          visibility: visible;
          transform: translateY(0);
          transition-duration: 0.4s;
          &:nth-child(2) {
            transition-delay: 0.05s;
          }
          &:nth-child(3) {
            transition-delay: 0.1s;
          }
          &:nth-child(4) {
            transition-delay: 0.15s;
          }
        }
      }
    }
  }
`;

export const FullHeaderGnb = () => {
  const [showAlbaList, setShowAlbaList] = useState(false);

  return (
    <FullHeaderGnbBlock>
      <ul className="main-list">
        <li data-anim>
          <Link to="/buy-sell">중고거래</Link>
        </li>
        <li data-anim>
          <Link to="/realty">부동산</Link>
        </li>
        <li data-anim>
          <Link to="/cars">중고차</Link>
        </li>
        <li
          data-anim
          className={classNames('alba', { 'show-list': showAlbaList })}
          onClick={() => setShowAlbaList((prev) => !prev)}
        >
          <span to="/">
            알바
            <IconDropdown $fz="0.75em" />
          </span>
          <ul>
            <li>
              <Link>알바 검색</Link>
            </li>
            <li>
              <Link>당근알바 소개</Link>
            </li>
            <li>
              <Link>
                기업형 서비스 <IconArrowUpRight />
              </Link>
            </li>
            <li>
              <Link>
                신뢰와 안전 <IconArrowUpRight />
              </Link>
            </li>
          </ul>
        </li>
        <li data-anim>
          <Link to="/">동네업체</Link>
        </li>
        <li data-anim>
          <Link to="/">동네생활</Link>
        </li>
        <li data-anim>
          <Link to="/">모임</Link>
        </li>
      </ul>
    </FullHeaderGnbBlock>
  );
};

export default Gnb;
