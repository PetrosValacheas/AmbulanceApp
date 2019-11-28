import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink, Link } from 'react-router-dom';
import Home from './Home';
import logo from './logo.png';
import './App.css';

//Toggles nav menu visibility
const toggleNav = () =>
  document.querySelector('nav').classList.toggle('toggle-menu');

const App = () => (
  <div>
    <header>
        <Link to="/">
        <img src={logo} className="logo" alt="logo" />
        </Link>
     
    </header>
    <div id="wrapper">
      <nav className="toggle-menu">
        <ul>
          <NavLinkItem anchor="Home" path="/" />
         
        </ul>
      </nav>
      <Route exact path="/" render={() => <Home />} />
      
    </div>
  </div>
);

//Returns list item containing a NavLink
const NavLinkItem = ({ anchor, path }) => (
  <li>
    <NavLink exact to={path} activeClassName="active" onClick={toggleNav}>
      {anchor}
    </NavLink>
  </li>
);

export default App;
