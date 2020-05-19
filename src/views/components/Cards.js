import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper } from '../styles/Cards';
import Сonfirmation from '../containres/Confirmation';
import Сard from '../containres/Card';

const Cards = () => (
  <CardWrapper>
    <h2>All goods</h2>
    <div className="container">
      <Сard/>
    </div>     
    <Сonfirmation/>
  </CardWrapper>
);

Cards.propTypes = {};

export default Cards;
