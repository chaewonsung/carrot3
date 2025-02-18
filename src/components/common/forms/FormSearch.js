import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import BtnSearch from '../buttons/BtnSearch';
import { rem, verticalLine } from '../../../lib/styles/variables';
import SelectBox from '../styles/SelectBox';
import { useEffect, useRef, useState } from 'react';
import { IconDropdownFill } from '../Icons';
import classNames from 'classnames';

const FormSearchBlock = styled.form`
  display: flex;
  align-items: center;
  padding: 0.3em;
  border: 1px solid ${palette.gray[4]};
  border-radius: 5px;
  &:focus-within {
    outline: ${({ focusStyle }) =>
      focusStyle && `1px solid ${palette.gray[9]}`};
  }
  input {
    flex: 1;
  }
`;

const FormSearch = ({
  children,
  placeholder = '검색어를 입력해주세요',
  autoFocus,
  focusStyle,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus) setTimeout(() => inputRef.current.focus(), 50);
  }, [autoFocus]);

  return (
    <FormSearchBlock focusStyle={focusStyle}>
      {children}
      <input ref={inputRef} type="search" placeholder={placeholder} />
      <BtnSearch />
    </FormSearchBlock>
  );
};

const Button = styled.button`
  ${verticalLine()}
  padding: 0 7px;
  font-size: ${rem(14)};
  .icon-dropdown-fill {
    margin-left: ${rem(2)};
  }
`;

const SelectBoxBlock = styled(SelectBox)`
  position: absolute;
  top: 200%;
  left: -10px;
  width: 100px;
  z-index: 998;
  button {
    padding: 0.5em 0.7em;
  }

  opacity: 0;
  visibility: hidden;
  transform: translateY(-10%);
  transition: 0.2s;
  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

const OptionBlock = styled.div`
  position: relative;
`;

const Option = ({ optionList }) => {
  const containerRef = useRef(null);
  const [showList, setShowList] = useState(false);
  const [selectedOption, setSelectedOption] = useState(optionList[0]);

  useEffect(() => {
    const handleClickBody = (e) => {
      if (!containerRef.current.contains(e.target)) setShowList(false);
    };

    document.body.addEventListener('click', handleClickBody);

    return () => {
      document.body.removeEventListener('click', handleClickBody);
    };
  }, []);

  return (
    <OptionBlock ref={containerRef}>
      <Button
        type="button"
        aria-haspopup
        aria-expanded={showList}
        onClick={() => setShowList((prev) => !prev)}
      >
        {selectedOption}
        <IconDropdownFill $scale="0.7" />
      </Button>
      <SelectBoxBlock className={classNames({ show: showList })}>
        {optionList &&
          optionList.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => {
                  setShowList(false);
                  setSelectedOption(item);
                }}
              >
                {item}
              </button>
            </li>
          ))}
      </SelectBoxBlock>
    </OptionBlock>
  );
};

export const FormSearchWithOption = ({ optionList, ...props }) => {
  return (
    <FormSearch {...props}>
      <Option optionList={optionList} />
    </FormSearch>
  );
};

export default FormSearch;
