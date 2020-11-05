import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Popup from './components/Popup'
import HeaderHome from './components/HeaderHome'
import Home from './components/Home'
import BannerHome from './components/BannerHome'
import Footer from './components/Footer'
import UserPage from './components/UserPage'
import Help from './components/Help'
import Tracking from './components/Tracking'

export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Nav
            page='home'
          />
          <Popup/>
          <HeaderHome/>
          <Home/>
          <BannerHome/>
          <Footer/>
        </Route>
        <Route path="/user">
          <Nav
            page='user'
          />
          <UserPage/>
        </Route>
        <Route path="/help">
          <Nav
            page='help'
          />
          <Help/>
          <BannerHome/>
          <Footer/>
        </Route>
        {/* <Route path="/tracking">
          <Nav
            page='tracking'
          />
          <Tracking/>
        </Route> */}
      </Switch>
    </Router>
  );
}
