import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchMarkets, fetchCryptosList } from './api/api'
import Home from './pages/Home/home';
import Details from './pages/Details/details';
import News from './pages/News/news';

const App = () => {
  useEffect(() => {
    fetchMarkets()
    fetchCryptosList();
  })
  
  return (
    <div className="App">
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
