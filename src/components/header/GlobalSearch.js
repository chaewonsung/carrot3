import React, { Children } from 'react';
import Inner from '../common/layouts/Inner';
import styled, { css } from 'styled-components';
import { media, rem } from '../../lib/styles/variables';
import FavSearchKeyword from './FavSearchKeyword';
import { NotMedium } from '../common/layouts/Responsive';
import BtnChangeAddress from './BtnChangeAddress';

const GlobalSearchBlock = styled.div`
  --global-search-height: 80px;
  background-color: #fff;
  .content {
    height: var(--global-search-height);
    display: flex;
    gap: ${rem(10)};
    align-items: flex-start;
  }
  .search {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 0;
    > *:nth-child(2) {
      flex: 1;
    }
  }

  ${media('medium')} {
    --global-search-height: 105px;
  }
`;

const GlobalSearch = ({ children: form, ...props }) => {
  return (
    <>
      <GlobalSearchBlock {...props}>
        <Inner>
          <div className="content">
            <NotMedium>
              <BtnChangeAddress />
            </NotMedium>
            <div className="search">
              {form}
              <FavSearchKeyword />
            </div>
          </div>
        </Inner>
      </GlobalSearchBlock>
    </>
  );
};

GlobalSearch.style = GlobalSearchBlock;

export default GlobalSearch;
