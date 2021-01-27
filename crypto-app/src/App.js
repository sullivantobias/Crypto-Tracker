import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchGlobalInfos, fetchMarkets } from './api/api'
import Home from './pages/Home/home';
import Details from './pages/Details/details';
import News from './pages/News/news';
import Header from './components/header/header';
import Listing from './components/listing/listing';

import './commons/styles/global.scss';
import './commons/styles/app.scss';

const App = () => {
  const [headerInfos, setHeaderInfos] = useState({});
  const [listingInfos, setListingInfos] = useState([]);

  useEffect(() => {
    headerHandler();
    listinghandler();
  }, [])

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
    const listingMarkets = await fetchMarkets();

    setListingInfos(listingMarkets);
  }

  return (
    <div className="App">
      <Header datas={headerInfos} />
      <Listing keys={['Name', 'Price', '24h', 'Market Cap', 'Volume', 'Circulating Supply']} datas={listingInfos} />
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/details'} className="nav-link">Details</Link></li>
              <li><Link to={'/news'} className="nav-link">News</Link></li>
            </ul>
          </nav>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/details' component={Details} />
            <Route path='/news' component={News} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
