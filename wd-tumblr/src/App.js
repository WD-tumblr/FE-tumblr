import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './DashBoard';
import Explore from './Explore';
import InBox from './InBox';
import Header from './components/Header';
import './App.scss';
const App = () => (
  <Router>
    <div className="container">
     <Header />
     <div className="main__container">
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route path="/explore" component={Explore} />
          <Route path="/inBox" component={InBox} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
