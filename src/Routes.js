import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import BeerList from './Pages/BeerList/BeerList';
import Nav from './Components/Nav/Nav';

const Routes = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/beerList" component={BeerList} />
        <Redirect path="*" to="/home" />
      </Switch>
    </Router>
  );
};

export default Routes;
