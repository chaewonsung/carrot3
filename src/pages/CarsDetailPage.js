import React from 'react';
import CarsDetail from '../components/cars-detail/CarsDetail';
import MainLayout from './MainLayout';

const CarsDetailPage = () => {
  return (
    <MainLayout noGlobalSearch>
      <CarsDetail />
    </MainLayout>
  );
};

export default CarsDetailPage;
