import styled from 'styled-components';
import palette from '../lib/styles/palette';
import { debounce } from 'lodash';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { rem } from '../lib/styles/variables';
import { useMatch } from 'react-router-dom';

const PracticeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 242px;
  height: 500px;
  outline: 1px solid black;
  margin: auto;
`;

const FilterItemSlideBlock = styled.div`
  width: 100%;
  .sub-title {
    font-weight: 600;
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
  height: 32px;
  display: flex;
  align-items: center;
  margin: ${rem(20)} 0;
  .gray-bar {
    position: relative;
    background-color: ${palette.gray[1]};
    border-radius: 99px;
    width: 100%;
    height: 3px;
    .before {
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

export const FilterItemSlide = ({ subTitle, points, unit }) => {
  const circleDiameter = useRef(32);
  const circleRadius = useRef(circleDiameter.current / 2);
  const slideRef = useRef(null);
  const pointsArrRef = useRef(points ? [0, ...points, 9999] : []);

  const [minMax, setminMax] = useState({
    min: { cx: circleRadius.current, value: pointsArrRef.current[0] },
    max: { cx: null, value: pointsArrRef.current.at(-1) },
    target: null,
  });

  const range = (() => {
    const minVal = minMax.min.value;
    const maxVal = minMax.max.value;
    if (minVal === 0 && maxVal === 9999) {
      return '전체';
    } else if (minVal === 0) {
      return `${maxVal}${unit} 이하`;
    } else if (maxVal === 9999) {
      return `${minVal}${unit} 이상`;
    } else {
      return `${minVal}${unit} ~ ${maxVal}${unit}`;
    }
  })();

  useLayoutEffect(() => {
    setminMax((prev) => ({
      ...prev,
      max: {
        ...prev.max,
        cx: slideRef.current.offsetWidth - circleRadius.current,
      },
    }));
  }, []);

  useEffect(() => {
    const pointsArr = pointsArrRef.current;
    const slide = slideRef.current;
    const slideWidth = slide.offsetWidth;
    const spaceBetweenCircle =
      (slideWidth - circleDiameter.current) / (pointsArr.length - 1);
    const centerXArr = Array.from(
      { length: pointsArr.length },
      (_, i) => circleRadius.current + i * spaceBetweenCircle
    );

    const { left: slideLeft } = slide.getBoundingClientRect();

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
            min: { cx: targetX, value: pointsArr[targetIndex] },
            target: 'min',
          };
        } else if (diffMin > diffMax) {
          return {
            ...prev,
            max: { cx: targetX, value: pointsArr[targetIndex] },
            target: 'max',
          };
        } else {
          return {
            ...prev,
            [prev.target]: { cx: targetX, value: pointsArr[targetIndex] },
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

    return () => {
      slide.removeEventListener('mousemove', handleMousemove);
      slide.removeEventListener('touchmove', handleSlideRange);
      slide.removeEventListener('click', handleSlideRange);
    };
  }, []);

  return (
    <FilterItemSlideBlock>
      {subTitle && <div className="sub-title">{subTitle}</div>}
      <div className="range">{range}</div>
      <Slide ref={slideRef}>
        <div className="gray-bar">
          <div className="point-bar"></div>
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

const Practice = () => {
  return (
    <PracticeBlock>
      <FilterItemSlide
        subTitle="전용면적"
        points={[2, 4, 6, 8, 10, 15, 20, 25, 30, 40, 50, 60, 70]}
        unit="평"
      />
    </PracticeBlock>
  );
};

export default Practice;
