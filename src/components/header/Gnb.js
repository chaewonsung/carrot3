import { Link } from 'react-router-dom';
import { IconArrowUpRight, IconDropdown } from '../common/Icons';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { rem } from '../../lib/styles/variables';
import SelectBox from '../common/styles/SelectBox';

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
          <Link to="/">부동산</Link>
        </li>
        <li>
          <Link to="/">중고차</Link>
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

export default Gnb;
