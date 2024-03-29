import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import allActions from './store/actions'
import { fetchAvailableCurrencies, fetchGlobalInfos } from './api/api'
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
      <Router>
        <Navigation links={[{ path: '/', title: 'Cryptocurrencies' }, { path: '/news', title: 'News' }]} />
        <Header datas={headerInfos} />
        <>
          <Navigation isBurger={false} links={[{ path: '/', title: 'Cryptocurrencies' }, { path: '/news', title: 'News' }]} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/currencies' component={Currency} />
            <Route path='/news' component={NewsPage} />
          </Switch>
        </>
      </Router>
    </div >
  );
}

export default App