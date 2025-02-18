import React from 'react';
import FilterTemplate, {
  FilterItemTemplate,
  FilterListTemplate,
} from '../common/market/FilterTemplate';
import {
  FilterItemButton,
  FilterItemCheckbox,
  FilterItemRadio,
} from '../common/market/FilterItem';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { media, rem } from '../../lib/styles/variables';

// const BUY_SELL_FILTER = {
//   category: {
//     type: 'radio',
//     queryKey: 'category',
//     list: [
//       { name: '디지털기기', queryValue: '1' },
//       { name: '생활가전', queryValue: '2' },
//       { name: '가구/인테리어', queryValue: '3' },
//       { name: '생활/주방', queryValue: '4' },
//       { name: '유아동', queryValue: '5' },
//       { name: '유아도서', queryValue: '6' },
//       { name: '여성의류', queryValue: '7' },
//       { name: '여성잡화', queryValue: '8' },
//       { name: '남성패션/잡화', queryValue: '9' },
//       { name: '뷰티/미용', queryValue: '10' },
//       { name: '스포츠/레저', queryValue: '11' },
//       { name: '취미/게임/음반', queryValue: '12' },
//       { name: '도서', queryValue: '13' },
//       { name: '티켓/교환권', queryValue: '14' },
//       { name: '가공식품', queryValue: '15' },
//       { name: '건강기능식품', queryValue: '16' },
//       { name: '반려동물용품', queryValue: '17' },
//       { name: '식물', queryValue: '18' },
//       { name: '기타 중고물품', queryValue: '19' },
//       { name: '삽니다', queryValue: '20' },
//     ],
//   },
//   sort: {
//     type: 'radio',
//     queryKey: 'sort_by',
//     list: [
//       { name: '최신순', queryValue: 'recent' },
//       { name: '인기순', queryValue: 'hottest' },
//     ],
//   },
//   price: {
//     type: 'radio',
//     queryKey: 'price',
//     list: [
//       { name: '나눔', queryValue: '0__0' },
//       { name: '5,000원 이하', queryValue: '0__5000' },
//       { name: '10,000원 이하', queryValue: '0__10000' },
//       { name: '20,000원 이하', queryValue: '0__20000' },
//     ],
//   },
// };

const BuySellFilter = () => {
  return (
    <FilterTemplate>
      <BuySellFilterContent />
    </FilterTemplate>
  );
};

const FilterInputWrapper = styled.div`
  font-size: ${rem(14)};
  > div {
    display: flex;
    margin: ${rem(15)} 0 ${rem(10)};
    align-items: center;
    input {
      flex: 1;
      border: 1px solid ${palette.gray[4]};
      border-radius: 5px;
      padding: 0.3em 0.5em;
      &::placeholder {
        color: ${palette.gray[8]};
      }
      &:focus {
        outline: 2px solid ${palette.gray[9]};
      }
    }
    span {
      margin: 0 5px;
      transform: translateY(-0.1em);
      font-size: 1.2em;
    }
  }
  > button {
    text-decoration: underline;
    color: ${palette.gray[8]};
  }
`;

const BuySellFilterContentBlock = styled.div`
  .location {
    > span {
      &::before {
        display: none;
      }
    }
    > button {
      padding-left: ${rem(10)};
    }
    > div {
      padding-left: ${rem(20)};
    }
  }
  .price {
    .price-buttons {
      display: flex;
      flex-direction: column;
    }
  }

  ${({ modal }) =>
    modal &&
    css`
      .location > div,
      .category,
      .sort {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }
      .price {
        .price-buttons {
          display: block;
          white-space: nowrap;
          overflow: auto;
        }
      }
      ${media('small')} {
        .location > div,
        .category,
        .sort {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `}
`;

export const BuySellFilterContent = (props) => {
  return (
    <BuySellFilterContentBlock {...props}>
      <FilterListTemplate>
        <FilterItemCheckbox className="checked">
          거래 가능만 보기
        </FilterItemCheckbox>
      </FilterListTemplate>
      <FilterListTemplate heading="위치">
        <div className="location">
          <FilterItemRadio as="span">경기도</FilterItemRadio>
          <FilterItemRadio className="checked">구리시</FilterItemRadio>
          <div>
            <FilterItemRadio>인창동</FilterItemRadio>
            <FilterItemRadio>수택동</FilterItemRadio>
            <FilterItemRadio>토평동</FilterItemRadio>
            <FilterItemRadio>갈매동</FilterItemRadio>
            <FilterItemRadio>교문동</FilterItemRadio>
          </div>
        </div>
      </FilterListTemplate>
      <FilterListTemplate heading="카테고리">
        <div className="category">
          {[
            '디지털기기',
            '생활가전',
            '가구/인테리어',
            '생활/주방',
            '유아동',
            '유아도서',
            '여성의류',
            '여성잡화',
            '남성패션/잡화',
            '뷰티/미용',
            '스포츠/레저',
            '취미/게임/음반',
            '도서',
            '티켓/교환권',
            '가공식품',
            '건강기능식품',
            '반려동물용품',
            '식물',
            '기타 중고물품',
            '삽니다',
          ].map((item) => (
            <FilterItemRadio
              key={item}
              className={item === '디지털기기' && 'checked'}
            >
              {item}
            </FilterItemRadio>
          ))}
        </div>
      </FilterListTemplate>
      <FilterListTemplate heading="정렬">
        <div className="sort">
          <FilterItemRadio className="checked">최신순</FilterItemRadio>
          <FilterItemRadio>인기순</FilterItemRadio>
        </div>
      </FilterListTemplate>
      <FilterListTemplate heading="가격">
        <div className="price">
          <div className="price-buttons">
            <FilterItemButton className="checked">나눔</FilterItemButton>
            <FilterItemButton>5,000원 이하</FilterItemButton>
            <FilterItemButton>10,000원 이하</FilterItemButton>
            <FilterItemButton>20,000원 이하</FilterItemButton>
          </div>
          <FilterInputWrapper>
            <div>
              <input type="number" value="0" />
              <span>-</span>
              <input type="number" value="0" />
            </div>
            <button>적용하기</button>
          </FilterInputWrapper>
        </div>
      </FilterListTemplate>
    </BuySellFilterContentBlock>
  );
};

export default BuySellFilter;
