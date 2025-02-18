import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { rem } from '../../lib/styles/variables';
import classNames from 'classnames';

const BtnInfoTooltipBlock = styled.div`
  position: relative;
  margin-left: 0.3em;
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
    width: 0.5em;
    aspect-ratio: 1/1;
    background-color: ${palette.gray[9]};
    z-index: 2;
    opacity: 0;
  }
  i {
    -webkit-text-stroke: 0.3px;
  }
  > div {
    font-size: 0.875em;
    font-weight: 500;
    position: absolute;
    z-index: 1;
    top: calc(100% + 0.5em);
    left: 50%;
    transform: translateX(-50%);
    white-space: pre;
    color: #fff;
    background-color: ${palette.gray[9]};
    padding: 0.6em 0.8em;
    border-radius: 5px;
    border: 1px solid ${palette.gray[0]};
  }

  &.show {
    &::before {
      opacity: 1;
    }
  }
`;

const BtnInfoTooltip = ({ text }) => {
  const [show, setShow] = useState(false);
  const [x, setX] = useState(0);
  const containerRef = useRef(null);
  const infoRef = useRef(null);

  useLayoutEffect(() => {
    if (show) {
      const { right } = infoRef.current.getBoundingClientRect();
      if (right > document.documentElement.clientWidth) {
        setX(right - document.documentElement.clientWidth);
      }
    } else {
      setX(0);
    }
  }, [show]);

  useEffect(() => {
    const handleClickDocument = (e) => {
      if (!containerRef.current.contains(e.target)) setShow(false);
    };
    document.body.addEventListener('click', handleClickDocument);

    return () => {
      document.body.removeEventListener('click', handleClickDocument);
    };
  }, []);

  return (
    <BtnInfoTooltipBlock className={classNames({ show })} ref={containerRef}>
      <button onClick={() => setShow((prev) => !prev)}>
        <i class="bi bi-info-circle"></i>
      </button>
      {show && (
        <div
          ref={infoRef}
          style={{ transform: `translateX(calc(-50% - ${x}px))` }}
        >
          {text}
        </div>
      )}
    </BtnInfoTooltipBlock>
  );
};

export default BtnInfoTooltip;
