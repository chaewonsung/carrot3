import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { rem } from '../../../lib/styles/variables';
import { debounce } from 'lodash';

const FilterItemBlock = styled.button`
  width: 100%;
  line-height: 2;
  &:hover {
    &::before {
      background-color: ${palette.gray[2]};
    }
  }
  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    aspect-ratio: 1/1;
    border: 1px solid ${palette.gray[3]};
    margin-right: ${rem(5)};
    transform: translateY(0.15em);
  }
`;

const FilterItemRadioBlock = styled(FilterItemBlock)`
  &::before {
    border-radius: 50%;
  }
  &.checked {
    &::before {
      background: radial-gradient(
        ${palette.gray[0]} 0%,
        ${palette.gray[0]} 30%,
        ${palette.carrot[5]} 30%,
        ${palette.carrot[5]} 100%
      );
    }
  }
`;

export const FilterItemRadio = ({ children, ...props }) => {
  return <FilterItemRadioBlock {...props}>{children}</FilterItemRadioBlock>;
};

const FilterItemCheckboxBlock = styled(FilterItemBlock)`
  &::before {
    border-radius: 3px;
  }
  &.checked {
    &::before {
      background-image: url('/images/filter_check.svg');
      background-repeat: no-repeat;
      background-size: cover;
      background-color: ${palette.carrot[5]};
    }
  }
`;

export const FilterItemCheckbox = ({ children, ...props }) => {
  return (
    <FilterItemCheckboxBlock {...props}>{children}</FilterItemCheckboxBlock>
  );
};

const FilterItemButtonBlock = styled.button`
  border: 1px solid ${palette.gray[3]};
  padding: 0.7em;
  border-radius: 99px;
  font-size: ${rem(14)};
  margin-bottom: 0.5em;
  margin-right: 0.5em;
  width: fit-content;

  &.checked {
    background-color: ${palette.gray[9]};
    color: ${palette.gray[0]};
  }
`;

export const FilterItemButton = ({ children, ...props }) => {
  return <FilterItemButtonBlock {...props}>{children}</FilterItemButtonBlock>;
};

const FilterItemSlideBlock = styled.div`
  width: 100%;
  .sub-title {
    font-weight: 500;
    margin-bottom: ${rem(7)};
  }
  .range {
    color: ${palette.gray[7]};
  }
  .btn-set-wrapper {
    text-align: right;
    button {
      color: ${palette.gray[7]};
      text-decoration: underline;
    }
  }
`;

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: ${rem(32)};
  display: flex;
  align-items: center;
  margin: ${rem(20)} 0;
  .gray-bar {
    position: relative;
    background-color: ${palette.gray[1]};
    border-radius: 99px;
    width: 100%;
    height: ${rem(3)};
    .point-bar {
      position: absolute;
      top: 0;
      height: 100%;
      background-color: ${palette.carrot[5]};
    }
  }
  .circle {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    aspect-ratio: 1/1;
    background-color: white;
    box-shadow: 0 4px 6px #00000026;
    border-radius: 50%;
  }
`;

export const FilterItemSlide = ({
  subTitle,
  points,
  unit,
  min,
  max,
  step = 1,
}) => {
  const circleRadiusRef = useRef(16);
  const slideRef = useRef(null);
  const pointsArrRef = useRef(
    points
      ? [0, ...points, 9999]
      : [
          0,
          ...Array.from(
            { length: Math.floor((max - min) / step) + 1 },
            (_, i) => min + i * step
          ),
          9999,
        ]
  );

  const [minMax, setminMax] = useState({
    min: {
      cx: circleRadiusRef.current,
      value: pointsArrRef.current[0],
      index: 0,
    },
    max: {
      cx: null,
      value: pointsArrRef.current.at(-1),
      index: pointsArrRef.current.length - 1,
    },
    target: null,
  });

  const RANGE_TEXT = (() => {
    const minVal = minMax.min.value;
    const maxVal = minMax.max.value;
    const unitText = unit || '';
    if (minVal === 0 && maxVal === 9999) {
      return '전체';
    } else if (minVal === 0) {
      return `${maxVal}${unitText} 이하`;
    } else if (maxVal === 9999) {
      return `${minVal}${unitText} 이상`;
    } else {
      return `${minVal}${unitText} ~ ${maxVal}${unitText}`;
    }
  })();

  useLayoutEffect(() => {
    setminMax((prev) => ({
      ...prev,
      max: {
        ...prev.max,
        cx: slideRef.current.offsetWidth - circleRadiusRef.current,
      },
    }));
  }, []);

  useEffect(() => {
    const pointsArr = pointsArrRef.current;
    const slide = slideRef.current;
    const circleRadius = circleRadiusRef.current;

    let slideWidth, spaceBetweenCircle, centerXArr, slideLeft;

    const calculateLayout = () => {
      slideWidth = slide.offsetWidth;
      spaceBetweenCircle =
        (slideWidth - circleRadius * 2) / (pointsArr.length - 1);
      centerXArr = Array.from(
        { length: pointsArr.length },
        (_, i) => circleRadius + i * spaceBetweenCircle
      );
      slideLeft = slide.getBoundingClientRect().left;
    };

    calculateLayout();

    const handleResize = debounce(() => {
      calculateLayout();
      setminMax((prev) => ({
        ...prev,
        max: { ...prev.max, cx: centerXArr[prev.max.index] },
      }));
    }, 50);

    const handleSlideRange = (e) => {
      const clientX = e.clientX || e.touches[0].clientX;
      const offsetX = clientX - slideLeft;
      const targetX = centerXArr.find((x) => offsetX <= x) || centerXArr.at(-1);
      const targetIndex = centerXArr.findIndex((x) => x === targetX);

      setminMax((prev) => {
        const diffMin = Math.trunc(Math.abs(targetX - prev.min.cx));
        const diffMax = Math.trunc(Math.abs(targetX - prev.max.cx));

        if (diffMin < diffMax) {
          return {
            ...prev,
            min: {
              cx: targetX,
              value: pointsArr[targetIndex],
              index: targetIndex,
            },
            target: 'min',
          };
        } else if (diffMin > diffMax) {
          return {
            ...prev,
            max: {
              cx: targetX,
              value: pointsArr[targetIndex],
              index: targetIndex,
            },
            target: 'max',
          };
        } else {
          return {
            ...prev,
            [prev.target]: {
              cx: targetX,
              value: pointsArr[targetIndex],
              index: targetIndex,
            },
          };
        }
      });
    };

    const handleMousemove = (e) => {
      if (e.buttons === 1) handleSlideRange(e);
    };

    slide.addEventListener('mousemove', handleMousemove);
    slide.addEventListener('touchmove', handleSlideRange);
    slide.addEventListener('click', handleSlideRange);
    window.addEventListener('resize', handleResize);

    return () => {
      slide.removeEventListener('mousemove', handleMousemove);
      slide.removeEventListener('touchmove', handleSlideRange);
      slide.removeEventListener('click', handleSlideRange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <FilterItemSlideBlock>
      {subTitle && <div className="sub-title">{subTitle}</div>}
      <div className="range">{RANGE_TEXT}</div>
      <Slide ref={slideRef}>
        <div className="gray-bar">
          <div
            className="point-bar"
            style={{
              left: minMax.min.cx,
              width: minMax.max.cx - minMax.min.cx,
            }}
          ></div>
        </div>
        <div
          className="circle"
          style={{
            transform: `translateX(calc(${minMax.min.cx}px - 50%))`,
          }}
        ></div>
        <div
          className="circle"
          style={{
            transform: `translateX(calc(${minMax.max.cx}px - 50%))`,
          }}
        ></div>
      </Slide>
      <div className="btn-set-wrapper">
        <button>적용하기</button>
      </div>
    </FilterItemSlideBlock>
  );
};
