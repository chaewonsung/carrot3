import { throttle } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalSearch from './GlobalSearch';
import FixedHeader from './FixedHeader';
import classNames from 'classnames';
import FullHeader from './FullHeader';
import palette from '../../lib/styles/palette';
import Transition from '../common/Transition';
import { FormSearchWithOption } from '../common/forms/FormSearch';

const FixedHeaderWrapperBlock = styled.div`
  position: relative;
  ${GlobalSearch.style} {
    position: fixed;
    top: calc(var(--fixed-header-height) - var(--global-search-height) - 1px);
    left: 0;
    width: 100%;
    z-index: 998;
    border-bottom: 1px solid ${palette.gray[2]};

    transform: translateY(0);
    opacity: 0;
    visibility: hidden;
    transition: 0.2s;
  }

  ${GlobalSearch.style}.show {
    transform: translateY(100%);
    opacity: 1;
    visibility: visible;
  }
`;

export const Space = styled.div`
  height: 72px;
`;

const FixedHeaderWrapper = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showFullHeader, setShowFullHeader] = useState(false);

  const handleScroll = useCallback(
    throttle(() => {
      if (showSearch) setShowSearch(false);
    }, 200),
    [showSearch]
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <FixedHeaderWrapperBlock>
      <FixedHeader
        showSearch={showSearch}
        setShowSearch={setShowSearch}
        showFullHeader={showFullHeader}
        setShowFullHeader={setShowFullHeader}
      />
      <Transition show={showSearch} timeout={200}>
        <GlobalSearch>
          <FormSearchWithOption
            optionList={['중고거래', '동네업체', '알바', '중고차', '부동산']}
            autoFocus={true}
          />
        </GlobalSearch>
      </Transition>
      <Space />
      <FullHeader
        showFullHeader={showFullHeader}
        setShowFullHeader={setShowFullHeader}
      />
    </FixedHeaderWrapperBlock>
  );
};

export default FixedHeaderWrapper;
