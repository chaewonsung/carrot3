import React from 'react';
import FilterTemplate, {
  FilterListTemplate,
} from '../common/market/FilterTemplate';
import {
  FilterItemButton,
  FilterItemCheckbox,
  FilterItemRadio,
  FilterItemSlide,
} from '../common/market/FilterItem';
import styled from 'styled-components';
import { rem } from '../../lib/styles/variables';

const CarsFilter = () => {
  return (
    <FilterTemplate>
      <CarsFilterContent />
    </FilterTemplate>
  );
};

const CarsFilterBrand = styled.div`
  max-height: ${rem(277)};
  overflow: auto;
  img {
    transform: translateY(${rem(4)});
    width: ${rem(32)};
    margin-right: ${rem(5)};
  }
`;

export const CarsFilterContent = () => {
  return (
    <div>
      <FilterListTemplate heading="브랜드">
        <CarsFilterBrand>
          {[
            '전체',
            '현대',
            '기아',
            '쉐보레(대우)',
            '르노코리아',
            'KGM',
            '어울림모터스',
            'BMW',
            '벤츠',
            '아우디',
            '폭스바겐',
          ].map((item, i) => (
            <FilterItemRadio key={item} className={i === 0 && 'checked'}>
              {i > 0 && <img src={`/images/cars_brand_img_${i}.png`} alt="" />}
              {item}
            </FilterItemRadio>
          ))}
        </CarsFilterBrand>
      </FilterListTemplate>
      <FilterListTemplate heading="차종">
        {[
          '경차/소형차',
          '준/중형차',
          '준/대형차',
          'SUV/RV',
          '승합/화물차',
          '기타',
        ].map((item, i) => (
          <FilterItemCheckbox key={item} className={i === 0 && 'checked'}>
            {item}
          </FilterItemCheckbox>
        ))}
      </FilterListTemplate>
      <FilterListTemplate heading="연료">
        {[
          '가솔린 (휘발유)',
          '하이브리드 (가솔린+전기)',
          '디젤 (경유)',
          '하이브리드 (디젤+전기)',
          'LPG',
          '하이브리드 (LPG+가솔린)',
          '하이브리드 (LPG+전기)',
          'CNG (천연가스)',
          '전기',
          '태양열',
          '하이브리드',
          '수소전기',
        ].map((item, i) => (
          <FilterItemCheckbox key={item}>{item}</FilterItemCheckbox>
        ))}
      </FilterListTemplate>
      <FilterListTemplate heading="가격">
        <FilterItemSlide
          points={[
            '100만원',
            '200만원',
            '300만원',
            '500만원',
            '700만원',
            '1000만원',
            '3000만원',
            '5000만원',
            '7000만원',
            '1억원',
          ]}
        />
      </FilterListTemplate>
      <FilterListTemplate heading="연식">
        <FilterItemSlide min={1994} max={2025} unit="년" />
      </FilterListTemplate>
      <FilterListTemplate heading="주행거리">
        <FilterItemSlide min={2} max={20} step={2} unit="만km" />
      </FilterListTemplate>
      <FilterListTemplate heading="변속기">
        {['자동 (A/T)', '수동 (M/T)'].map((item, i) => (
          <FilterItemButton key={item} className={i === 0 && 'checked'}>
            {item}
          </FilterItemButton>
        ))}
      </FilterListTemplate>
      <FilterListTemplate heading="판매 방식">
        {['일반', '리스 승계', '렌트'].map((item) => (
          <FilterItemButton>{item}</FilterItemButton>
        ))}
      </FilterListTemplate>
    </div>
  );
};

export default CarsFilter;
