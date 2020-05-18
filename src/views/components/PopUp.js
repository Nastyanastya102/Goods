import React from 'react';
import PropTypes from 'prop-types';

import { BouhtItem } from '../../views/styles/PopUp';

const PopUp = ({ basket, sum }) => (
  <BouhtItem>
    <div className="container">
      <ul> 
        <li>Shopping Cart</li>
        <li>Name</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Total</li>
      </ul>
      { Object.keys(basket).length
      ? <>
          {Object.entries(basket).map( ([key, value]) => (
            <ul key={key} className="shoping_card">
              <li><img src={value.image} alt="produtc"/></li>
              <li>{key}</li>
              <li>{value.qnt}</li>
              <li>${value.price}</li>
              <li>${value.total}</li>
              {value.offers
              ? <span className="sale">Offer</span>
              : null
              }
            </ul>
          ))}

          <span className="total">
            Total: {sum}
          </span>
        </>
      : null
      }
    </div>
  </BouhtItem>
);

PopUp.propTypes = {
  basket: PropTypes.object.isRequired
};

export default PopUp;
