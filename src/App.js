import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { fetchAvailableCurrencies, fetchGlobalInfos } from './api/api'
import allActions from './store/actions'
import Home from './pages/Home/home';
import Currency from './pages/Currency/currency';
import NewsPage from './pages/News/news';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';

import './commons/styles/global.scss';
import './commons/styles/app.scss';

const App = () => {
  const [headerInfos, setHeaderInfos] = useState({});

  const dispatch = useDispatch()

  useEffect(() => {
    headerHandler();
    currenciesHandler();
  }, []);

  const currenciesHandler = async () => {
    const currencies = await fetchAvailableCurrencies();

    dispatch(allActions.currencyActions.fetchCurrencies(currencies))
  }

  const headerHandler = async () => {
    const globalInfos = await fetchGlobalInfos();
    const { active_cryptocurrencies,
      market_cap_percentage,
      market_cap_change_percentage_24h_usd
    } = globalInfos.data

    setHeaderInfos(
      {
        ...headerInfos,
        Coins: active_cryptocurrencies,
        "24h Market Cap Change": `${market_cap_change_percentage_24h_usd.toFixed(1)}%`,
        'BTC  Dominance': `${market_cap_percentage.btc.toFixed(2)}%`
      }
    );
  }

  return (
    <div className="App">
        <Navigation links={[
          { path: '/Crypto-Tracker', title: 'Cryptocurrencies' },
          { path: '/Crypto-Tracker/news', title: 'News' }
        ]} />
        <Header datas={headerInfos} />
        <React.Fragment>
          <Navigation
            isBurger={false}
            links={[
              { path: '/Crypto-Tracker', title: 'Cryptocurrencies' },
              { path: '/Crypto-Tracker/news', title: 'News' }
            ]} />
          <Routes>
            <Route exact path='/Crypto-Tracker' element={<Home/>} />
            <Route path='/Crypto-Tracker/currency/:cryptoID' element={<Currency/>} />
            <Route path='/Crypto-Tracker/news' element={<NewsPage/>} />
          </Routes>
        </React.Fragment>
    </div >
  );
}

export default App
