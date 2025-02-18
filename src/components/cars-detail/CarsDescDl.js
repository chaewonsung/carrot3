import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import BtnInfoTooltip from './BtnInfoTooltip';
import { IconDropdown } from '../common/Icons';
import classNames from 'classnames';

const TOOLTIPS = {
  인수금: '판매자에게 지급해야 할 금액이에요.',
  '총 인수 비용':
    '차량을 인수하고 만기 때까지 운행했을 때 발생하는 총비용이에요.',
  '만기 후 구매': '렌트(리스)사에 지급해야 할 구매 비용(잔존가치 - 보증금)',
  '만기 후 반납': '렌트(리스)사에서 환급받는 보증금',
};

const CarsDescDlBlock = styled.dl`
  --dl-flex-gap: 0.9em;
  --dt-width: 148px;
  display: flex;
  flex-direction: column;
  gap: var(--dl-flex-gap);
`;

const CarsDescDl = ({ obj }) => {
  return (
    <CarsDescDlBlock>
      {Object.entries(obj).map((arr) => (
        <CarsDescDlItem arr={arr} />
      ))}
    </CarsDescDlBlock>
  );
};

const CarsDescDlItemBlock = styled.div`
  --dt-color: ${palette.gray[7]};

  display: flex;
  align-items: center;
  dt,
  dd {
    display: inline-block;
  }
  dt {
    color: var(--dt-color);
    width: var(--dt-width);
  }
`;

const CarsDescDlItem = ({ arr, ...props }) => {
  if (typeof arr[1] === 'object') {
    return <CarsDescDlItemForSelect obj={arr[1]} />;
  }
  return (
    <CarsDescDlItemBlock {...props}>
      <dt>{arr[0]}</dt>
      <dd>{arr[1]}</dd>
      {TOOLTIPS[arr[0]] && <BtnInfoTooltip text={TOOLTIPS[arr[0]]} />}
    </CarsDescDlItemBlock>
  );
};

const CarsDescDlItemForSelectBlock = styled(CarsDescDlItemBlock)`
  .btn-select {
    position: relative;
    > button {
      width: var(--dt-width);
      color: var(--dt-color);
    }
  }
  dt {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  ul {
    position: absolute;
    top: calc(var(--dl-flex-gap) * -1);
    left: calc(var(--dl-flex-gap) * -1);
    width: 100%;
    background-color: white;
    outline: 1px solid ${palette.gray[3]};
    button {
      width: 100%;
      padding: var(--dl-flex-gap);
      &:hover,
      &:focus {
        background-color: ${palette.gray[2]};
        font-weight: 600;
        outline: none;
      }
    }
    opacity: 0;
    visibility: hidden;
    &.show {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const CarsDescDlItemForSelect = ({ obj }) => {
  const keys = useRef(Object.keys(obj));
  const values = useRef(Object.values(obj));

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [show, setShow] = useState(false);

  const selectedKey = keys.current[selectedIndex];
  const selectedValue = values.current[selectedIndex];

  return (
    <CarsDescDlItemForSelectBlock>
      <div className="btn-select">
        <button onClick={() => setShow((prev) => !prev)}>
          {selectedKey} <IconDropdown />
        </button>
        <ul
          className={classNames({ show })}
          style={{
            transform: `translateY(${selectedIndex * -50}%)`,
          }}
        >
          {keys.current.map((key, i) => (
            <li key={key}>
              <button
                onClick={() => {
                  setSelectedIndex(i);
                  setShow(false);
                }}
              >
                {key}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <dt>{selectedKey}</dt>
      <dd>{selectedValue}</dd>
      {TOOLTIPS[selectedKey] && <BtnInfoTooltip text={TOOLTIPS[selectedKey]} />}
    </CarsDescDlItemForSelectBlock>
  );
};

export default CarsDescDl;
