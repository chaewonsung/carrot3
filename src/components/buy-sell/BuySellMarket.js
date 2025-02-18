import React from 'react';
import MarketLayout from '../common/market/MarketLayout';
import BuySellFilter from './BuySellFilter';
import BuySellSelectedFilter from './BuySellSelectedFilter';
import BuySellGoodsList from './BuySellGoodsList';

// const BUY_SELL_FILTER = {
//   카테고리: {
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
//   정렬: {
//     type: 'radio',
//     queryKey: 'sort_by',
//     list: [
//       { name: '최신순', queryValue: 'recent' },
//       { name: '인기순', queryValue: 'hottest' },
//     ],
//   },
//   가격: {
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

const BuySellMarket = () => {
  return (
    <MarketLayout market="중고거래">
      <BuySellFilter />
      <BuySellSelectedFilter />
      <BuySellGoodsList />
    </MarketLayout>
  );
};

export default BuySellMarket;
