import React from 'react';
import Inner from '../common/layouts/Inner';
import styled, { css } from 'styled-components';
import BtnChangeAddress from '../common/buttons/BtnChangeAddress';
import SearchForm from './SearchForm';
import { rem } from '../../lib/styles/variables';
import FavSearchKeyword from './FavSearchKeyword';
import palette from '../../lib/styles/palette';

const GlobalSearchBlock = styled.div`
  --height: 80px;
  background-color: #fff;
  .content {
    display: flex;
    gap: ${rem(10)};
    align-items: flex-start;
    height: var(--height);
  }
  .search {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    > *:nth-child(2) {
      flex: 1;
    }
  }

  ${({ isScrolling }) =>
    isScrolling &&
    css`
      position: fixed;
      top: calc(var(--fixed-header-height) - var(--height));
      width: 100%;
      z-index: 998;
      border-bottom: 1px solid ${palette.gray[2]};
    `}
`;

const Space = styled.div`
  height: 80px;
`;

const GlobalSearch = ({ globalSearchRef, isScrolling }) => {
  return (
    <>
      <GlobalSearchBlock ref={globalSearchRef} isScrolling={isScrolling}>
        <Inner>
          <div className="content">
            <BtnChangeAddress />
            <div className="search">
              <SearchForm />
              <FavSearchKeyword />
            </div>
          </div>
        </Inner>
      </GlobalSearchBlock>
      {isScrolling && <Space />}
    </>
  );
};

export default GlobalSearch;
