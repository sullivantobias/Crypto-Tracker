import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { fetchAvailableCurrencies, fetchGlobalInfos, fetchMarkets } from './api/api'
import Home from './pages/Home/home';
import Currency from './pages/Currency/currency';
import News from './pages/News/news';
import Header from './components/header/header';
import Navigation from './components/navigation/navigation';

import './commons/styles/global.scss';
import './commons/styles/app.scss';

const App = () => {
  const [headerInfos, setHeaderInfos] = useState({});
  const [listingInfos, setListingInfos] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

  const currencyData = useSelector(state => state.currency)

  useEffect(() => {
    headerHandler();
    listinghandler();
    currenciesHandler();
  }, [currencyData])

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

  const listinghandler = async () => {
    setLoadingList(false)
    const listingMarkets = await fetchMarkets(currencyData.currency);
    setLoadingList(true)

    setListingInfos(listingMarkets);
  }

  const currenciesHandler = async () => {
    const currencies = await fetchAvailableCurrencies();

    setCurrencies(currencies);
  }

  return (
    <div className="App">
      <Header datas={headerInfos} currencies={currencies} />
      <Router>
        <div>
          <Navigation links={[{ path: '/', title: 'Home' }, { path: '/news', title: 'News' }]} />
          <Switch>
            <Route exact path='/' component={() => <Home loadingList={loadingList} keys={['Name', 'Price', '24h', 'Market Cap', 'Volume', 'Circulating Supply', 'Last 7 Days']} datas={listingInfos} currency={currencyData.currency} />} />
            <Route path='/currencies' component={Currency} />
            <Route path='/news' component={News} />
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App