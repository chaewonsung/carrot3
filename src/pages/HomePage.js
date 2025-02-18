import React from 'react';
import MainBanner from '../components/home/MainBanner';
import Category from '../components/home/Category';
import MainLayout from './MainLayout';

const HomePage = () => {
  return (
    <MainLayout>
      <MainBanner />
      <Category />
    </MainLayout>
  );
};

export default HomePage;
