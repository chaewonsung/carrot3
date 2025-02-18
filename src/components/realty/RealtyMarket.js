import React from 'react';
import MarketLayout from '../common/market/MarketLayout';
import RealtyFilter from './RealtyFilter';
import RealtySelectedFilter from './RealtySelectedFilter';
import RealtyGoodsList from './RealtyGoodsList';

const RealtyMarket = () => {
  return (
    <MarketLayout market="부동산">
      <RealtyFilter />
      <RealtySelectedFilter />
      <RealtyGoodsList />
    </MarketLayout>
  );
};

export default RealtyMarket;
