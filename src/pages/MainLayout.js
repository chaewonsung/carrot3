import React from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import DownloadAppBanner from '../components/DownloadAppBanner';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <DownloadAppBanner />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
