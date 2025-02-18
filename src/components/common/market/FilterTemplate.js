import React from 'react';
import styled from 'styled-components';
import { media, rem } from '../../../lib/styles/variables';
import palette from '../../../lib/styles/palette';
import { NotMedium } from '../layouts/Responsive';

const FilterTemplateBlock = styled.div`
  position: relative;
  float: left;
  width: 242px;
  margin-right: ${rem(30)};

  h2 {
    font-size: ${rem(20)};
    font-weight: 600;
  }

  .btn-reset {
    position: absolute;
    top: 10px;
    right: 0;
    transform: translateY(-50%);
    text-decoration: underline;
    color: ${palette.gray[7]};
    font-size: ${rem(14)};
  }

  ${media('large')} {
    width: 198px;
  }
`;

const FilterTemplate = ({ children }) => {
  return (
    <NotMedium>
      <FilterTemplateBlock className="market-filter">
        <h2>필터</h2>
        {children}
        <button className="btn-reset">초기화</button>
      </FilterTemplateBlock>
    </NotMedium>
  );
};

const FilterListTemplateBlock = styled.div`
  padding: ${rem(30)} 0;

  & + & {
    border-top: 1px solid ${palette.gray[3]};
  }

  h3 {
    font-weight: 600;
    margin-bottom: ${rem(15)};
  }

  /* > div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  } */
`;

export const FilterListTemplate = ({ children, heading }) => {
  return (
    <FilterListTemplateBlock>
      {heading && <h3>{heading}</h3>}
      {children}
    </FilterListTemplateBlock>
  );
};
FilterListTemplate.style = FilterListTemplateBlock;

export default FilterTemplate;
