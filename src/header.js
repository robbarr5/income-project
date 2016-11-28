import React from 'react';

import './header.css';
import logo from './dollar_pound.png';


const Header = () => (
     <header className="Header">
     	<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Income Calculator</h2>
        </div>
     </header>
    );

export default Header;