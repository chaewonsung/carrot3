import React, { useEffect, useLayoutEffect } from 'react';
import Header from '../components/header/Header';
import { useLocation } from 'react-router-dom';
import DownloadAppBanner from '../components/DownloadAppBanner';
import Footer from '../components/footer/Footer';

const MainLayout = ({ noGlobalSearch, children }) => {
  return (
    <>
      <ScrollToTop />
      <Header noGlobalSearch={noGlobalSearch} />
      <main>
        {children}
        <DownloadAppBanner />
      </main>
      <Footer />
    </>
  );
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default MainLayout;
