import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import DashBoard from './DashBoard';
import Explore from './Explore';
import InBox from './InBox';

import './App.scss';

const Links = () => (
  // eslint-disable-next-line no-unused-expressions
  <nav className="links">
    <NavLink to="/">DashBoard</NavLink>
    <NavLink to="/explore">Explore</NavLink>
    <NavLink to="/InBox">InBox</NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/explore" component={Explore} />
        <Route path="/inBox" component={InBox} />
      </Switch>
    </div>
  </Router>
);

export default App;
