import React from 'react';
import MainLayout from './MainLayout';
import BuySellDetail from '../components/buy-sell-detail/BuySellDetail';

const BuySellDetailPage = () => {
  return (
    <MainLayout noGlobalSearch>
      <BuySellDetail />
    </MainLayout>
  );
};

export default BuySellDetailPage;
