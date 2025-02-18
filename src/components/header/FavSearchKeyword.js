import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { media, rem } from '../../lib/styles/variables';

const FavSearchKeywordBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(15)};
  font-size: ${rem(14)};
  white-space: nowrap;
  overflow: hidden;
  ul {
    display: flex;
    gap: ${rem(15)};
    flex: 1;
    width: 0;
    background: linear-gradient(to right, ${palette.gray[7]} 95%, white);
    background-clip: text;
    li {
      &:hover {
        box-shadow: 0 1px ${palette.gray[7]};
      }
    }
    a {
      color: transparent;
    }
  }

  ${media('medium')} {
    overflow: auto;
    margin: 0 calc(var(--inner-padding) * -1);
    &::-webkit-scrollbar {
      display: none;
    }
    span {
      display: none;
    }
    ul {
      background: none;
      background-clip: none;
      gap: ${rem(7)};
      width: auto;
      padding: 0 var(--inner-padding);
      li {
        &:hover {
          box-shadow: none;
        }
      }
      a {
        display: inline-block;
        color: ${palette.gray[9]};
        border: 1px solid ${palette.gray[2]};
        border-radius: 99px;
        padding: 0.6em 0.7em;
      }
    }
  }
`;

const FavSearchKeyword = () => {
  return (
    <FavSearchKeywordBlock>
      <span>인기 검색어</span>
      <ul>
        {[
          '아이폰',
          '의자',
          '자전거',
          '컴퓨터',
          '책상',
          '소파',
          '원피스',
          '전기자전거',
          '식탁',
          '모니터',
          '굿즈',
          '플스',
          '닌텐도',
          '다이슨',
          '에어팟',
          '다이소',
          '기프티콘',
          '가습기',
          '포토카드',
        ].map((item) => (
          <li key={item}>
            <Link>{item}</Link>
          </li>
        ))}
      </ul>
    </FavSearchKeywordBlock>
  );
};

export default FavSearchKeyword;
