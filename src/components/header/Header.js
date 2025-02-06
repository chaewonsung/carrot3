import React, { useCallback, useEffect, useRef, useState } from 'react';
import FixedHeader from './FixedHeader';
import styled from 'styled-components';
import GlobalSearch from './GlobalSearch';
import { debounce } from 'lodash';

const HeaderBlock = styled.header`
  --fixed-header-height: 72px;
`;

const Header = () => {
  const [isScrolling, setisScrolling] = useState(false);
  const [isGlobalSearchOpen, setIsGlobalSearchOpen] = useState(false);
  const globalSearchRef = useRef(null);
  const targetY = useRef(null);

  useEffect(() => {
    if (globalSearchRef.current) {
      targetY.current = globalSearchRef.current.offsetHeight;
    }
  }, []);

  const handleScroll = useCallback(() => {
    console.log('스크롤');

    if (!isScrolling && window.scrollY > targetY.current) setisScrolling(true);
    if (isScrolling && window.scrollY <= targetY.current) setisScrolling(false);
  }, [isScrolling]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <HeaderBlock>
      <FixedHeader isScrolling={isScrolling} />
      <GlobalSearch
        globalSearchRef={globalSearchRef}
        isScrolling={isScrolling}
      />
    </HeaderBlock>
  );
};

export default Header;
