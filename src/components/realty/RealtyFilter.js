import React from 'react';
import FilterTemplate, {
  FilterListTemplate,
} from '../common/market/FilterTemplate';
import {
  FilterItemCheckbox,
  FilterItemSlide,
} from '../common/market/FilterItem';

const RealtyFilter = () => {
  return (
    <FilterTemplate>
      <RealtyFilterContent />
    </FilterTemplate>
  );
};

export const RealtyFilterContent = () => {
  return (
    <div>
      <FilterListTemplate heading="매물 종류">
        {[
          '원룸',
          '투룸빌라',
          '오피스텔',
          '아파트',
          '상가',
          '기타(사무실, 주택, 토지 등)',
        ].map((item, i) => (
          <FilterItemCheckbox key={item} className={i === 0 && 'checked'}>
            {item}
          </FilterItemCheckbox>
        ))}
      </FilterListTemplate>
      <FilterListTemplate heading="거래 유형/가격">
        {['월세', '전세', '매매', '단기'].map((item, i) => (
          <FilterItemCheckbox key={item} className={i === 0 && 'checked'}>
            {item}
          </FilterItemCheckbox>
        ))}
      </FilterListTemplate>
      <FilterListTemplate heading="평수">
        <FilterItemSlide
          subTitle="전용면적"
          points={[2, 4, 6, 8, 10, 15, 20, 25, 30, 40, 50, 60, 70]}
          unit="평"
        />
      </FilterListTemplate>
      <FilterListTemplate heading="층수">
        {['반지하', '1층', '2~5층', '6~9층', '10층 이상'].map((item) => (
          <FilterItemCheckbox key={item}>{item}</FilterItemCheckbox>
        ))}
      </FilterListTemplate>
      <FilterListTemplate heading="매물 조건">
        {[
          '주차 가능',
          '반려동물 가능',
          '대출 가능',
          '엘리베이터',
          '옥탑',
          '복층',
        ].map((item) => (
          <FilterItemCheckbox key={item}>{item}</FilterItemCheckbox>
        ))}
      </FilterListTemplate>
    </div>
  );
};

export default RealtyFilter;
