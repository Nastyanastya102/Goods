import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { HeaderStyle } from '../styles/Header';
import { Basket } from './index';

const Header = ({  total }) => {
  const [basket, setBasket] = useState(false)
  return (
  <HeaderStyle>
      <button className="popup_btn" onClick={() => setBasket(!basket)}>
        <img src="cart.png" alt="basket"/>
        <span className="basket">{total}</span> 
      </button>
      <h1>Shopping List</h1>
      <h2>Never put off till tomorrow<br/>what you can buy today!</h2>
      { basket && <Basket close={setBasket}/> }
  </HeaderStyle>
  )
};
  
Header.propTypes = {
  total: PropTypes.number.isRequired
};

export default Header;
