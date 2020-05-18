import React from 'react';
import PropTypes from 'prop-types';

import { HeaderStyle } from '../styles/Header';

const Header = ({  total }) => (
  <HeaderStyle>
      <button className="popup_btn">
        <img src="cart.png" alt="basket"/>
        <span>{total}</span> 
      </button>
      <h1>Shopping List</h1>
      <h2>Never put off till tomorrow<br/>what you can buy today!</h2>
  </HeaderStyle>
);

Header.propTypes = {
  total: PropTypes.number.isRequired
};

export default Header;
