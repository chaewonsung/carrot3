import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { rem } from '../../lib/styles/variables';

const FavSearchKeywordBlock = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(15)};
  font-size: ${rem(14)};
  ul {
    display: flex;
    gap: ${rem(15)};
    a {
      color: ${palette.gray[7]};
      &:hover {
        text-decoration: underline;
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
