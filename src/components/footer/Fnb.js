import React from 'react';
import { IconArrowUpRight } from '../common/Icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { rem } from '../../lib/styles/variables';
import palette from '../../lib/styles/palette';

const FnbBlock = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 30px;
  width: 688px;

  > li {
    width: 25%;
    span {
      display: inline-block;
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
  ul {
    font-size: ${rem(14)};
    display: flex;
    flex-direction: column;
    gap: 15px;
    li {
      width: 100%;
    }
    a {
      display: inline-block;
      width: 100%;
      &:hover {
        color: ${palette.gray[7]};
      }
    }
  }
`;

const Fnb = () => {
  return (
    <FnbBlock>
      <li>
        <span>회사</span>
        <ul>
          <li>
            <Link to="/">회사 소개</Link>
          </li>
          <li>
            <Link to="/">당근페이</Link>
          </li>
          <li>
            <Link to="/">팀문화</Link>
          </li>
          <li>
            <Link to="/">서비스 소개</Link>
          </li>
          <li>
            <Link to="/">블로그</Link>
          </li>
          <li>
            <Link to="/">채용</Link>
          </li>
        </ul>
      </li>
      <li>
        <span>탐색</span>
        <ul>
          <li>
            <Link to="/">중고거래</Link>
          </li>
          <li>
            <Link to="/">부동산</Link>
          </li>
          <li>
            <Link to="/">중고차</Link>
          </li>
          <li>
            <Link to="/">알바</Link>
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
          <li>
            <Link to="/">채팅하기</Link>
          </li>
          <li>
            <Link to="/">이웃</Link>
          </li>
        </ul>
      </li>
      <li>
        <span>비즈니스</span>
        <ul>
          <li>
            <Link to="/">당근 비즈니스</Link>
          </li>
          <li>
            <Link to="/">제휴 문의</Link>
          </li>
          <li>
            <Link to="/">광고 문의</Link>
          </li>
        </ul>
      </li>
      <li>
        <span>Karrot</span>
        <ul>
          <li>
            <Link to="/">
              Canada <IconArrowUpRight />
            </Link>
          </li>
          <li>
            <Link to="/">
              United States <IconArrowUpRight />
            </Link>
          </li>
          <li>
            <Link to="/">
              United Kingdom <IconArrowUpRight />
            </Link>
          </li>
          <li>
            <Link to="/">
              日本 <IconArrowUpRight />
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <span>문의</span>
        <ul>
          <li>
            <Link to="/">IR</Link>
          </li>
          <li>
            <Link to="/">PR</Link>
          </li>
          <li>
            <Link to="/">고객센터</Link>
          </li>
        </ul>
      </li>
    </FnbBlock>
  );
};

export default Fnb;
