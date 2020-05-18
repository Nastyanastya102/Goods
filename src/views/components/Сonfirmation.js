import React from 'react';
import PropTypes from 'prop-types';

import { CardButton } from '../styles/Card';

export const Сonfirmation = ({ basket, addToCard }) => {
  return (
    <div>
       <div className="deliveryDat">
          <input type="date" name="date"/>
          <label htmlFor="date">When did you place your order?</label>
       </div>
       <CardButton onClick={() => addToCard(item, index)}>Add to Cart</CardButton>
    </div>
  )
};

Сonfirmation.propTypes = {
  addToCard: PropTypes.func.isRequired, 
  basket: PropTypes.object.isRequired
};

export default Сonfirmation;
