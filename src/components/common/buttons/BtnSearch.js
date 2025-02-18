import React from 'react';
import styled from 'styled-components';
import { IconSearch } from '../Icons';
import palette from '../../../lib/styles/palette';

const BtnSearchBlock = styled.button`
  padding: 0.45em 0.5em;
  border-radius: 5px;
  &:hover {
    background-color: ${palette.gray[3]};
  }
`;

const BtnSearch = (props) => {
  return (
    <BtnSearchBlock aria-label="검색 버튼" {...props} type="button">
      <IconSearch />
    </BtnSearchBlock>
  );
};

BtnSearch.style = BtnSearchBlock;

export default BtnSearch;
