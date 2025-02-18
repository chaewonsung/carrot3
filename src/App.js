import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BuySellPage from './pages/BuySellPage';
import GlobalStyles from './GlobalStyles';
import Practice from './components/Practice';
import BuySellDetailPage from './pages/BuySellDetailPage';
import { useCookies } from 'react-cookie';
import RealtyPage from './pages/RealtyPage';
import RealtyDetailPage from './pages/RealtyDetailPage';
import CarsDetailPage from './pages/CarsDetailPage';
import CarsPage from './pages/CarsPage';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/buy-sell" element={<BuySellPage />} />
        <Route path="/buy-sell/:goods" element={<BuySellDetailPage />} />
        <Route path="/realty" element={<RealtyPage />} />
        <Route path="/realty/:goods" element={<RealtyDetailPage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/cars/:goods" element={<CarsDetailPage />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </>
  );
}

export default App;
