import React from 'react';
import MarketLayout from '../common/market/MarketLayout';
import CarsFilter from './CarsFilter';
import CarsSelectedFilter from './CarsSelectedFilter';
import CarsList from './CarsList';

const CarsMarket = () => {
  return (
    <MarketLayout market="중고차">
      <CarsFilter />
      <CarsSelectedFilter />
      <CarsList />
    </MarketLayout>
  );
};

export default CarsMarket;
