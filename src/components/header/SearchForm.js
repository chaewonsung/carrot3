import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import BtnSearch from '../common/buttons/BtnSearch';
import { IconDropdownFill } from '../common/Icons';
import { rem, verticalLine } from '../../lib/styles/variables';
import SelectBox from '../common/styles/SelectBox';

const SearchFormBlock = styled.form`
  height: 43px;
  display: flex;
  align-items: center;
  padding: 0.4em;
  border: 1px solid ${palette.gray[4]};
  border-radius: 5px;
  input {
    flex: 1;
  }
`;

const SearchForm = () => {
  return (
    <SearchFormBlock>
      <Option />
      <input type="search" placeholder="검색어를 입력해주세요" />
      <BtnSearch />
    </SearchFormBlock>
  );
};

const OptionBlock = styled.div`
  position: relative;
`;

const Button = styled.button`
  ${verticalLine()}
  padding: 0 7px;
  font-size: ${rem(14)};
  .icon-dropdown-fill {
    margin-left: ${rem(3)};
  }
`;

const SelectBoxBlock = styled(SelectBox)`
  display: none;
  position: absolute;
  top: 200%;
  left: -10%;
  width: 100px;
  button {
    padding: 0.5em 0.7em;
  }
`;

const Option = () => {
  return (
    <OptionBlock>
      <Button type="button">
        중고거래
        <IconDropdownFill $fz="0.7em" />
      </Button>
      <SelectBoxBlock>
        {['중고거래', '동네업체', '알바', '중고차', '부동산'].map((item) => (
          <li key={item}>
            <button type="button">{item}</button>
          </li>
        ))}
      </SelectBoxBlock>
    </OptionBlock>
  );
};

export default SearchForm;
