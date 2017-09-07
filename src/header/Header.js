import React, { Component } from 'react';

import logo from '../assets/images/logo.png';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header className="header display--flex">
        <img src={logo} className="header__logo" alt="logo" />
        <h2 className="header__title">Flight Search App</h2>
      </header>
    );
  }
}

export default Header;
