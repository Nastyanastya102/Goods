import React from 'react';
import PropTypes from 'prop-types';

import { BouhtItem } from '../styles/Basket';
import { Close } from '../styles/same';

const Basket = ({ basket, sum, minus, plus, close, removeFromCard }) => (
  <BouhtItem>
    <div className="container">
    <Close yellow className="close_modal" onClick={() => close(false)}>X</Close>
      <ul> 
        <li>Shopping Cart</li>
        <li>Name</li>
        <li>Quantity</li>
        <li>Price</li>
        <li>Total</li>
        <li>Delivery day</li>
        <li></li>
      </ul>
      { Object.keys(basket).length ? (
        <>
          {Object.entries(basket).map( ([key, value]) => (
            <ul key={key} className="shoping_card">
              { value.offers && <span className="sale">Offer</span> }
              <li><img src={value.image} alt="produtc"/></li>
              <li>{key}</li>
              <li>
                <i onClick={ () => minus({name: key, ...value})}>
                  <img src="minus.png" alt="minus"/>
                </i>
                {value.qnt}
                <i onClick={ () => plus({name: key, ...value})}>
                  <img src="plus.png" alt="plus"/>
                </i>
                </li>
              <li>${value.price}</li>
              <li>${value.total}</li>
              <li>{value.delivery || "Any"}</li>
              <li>
                <img src="delete.png" alt="delete" className="delete" onClick={() => removeFromCard({name: key})}/>
              </li>
            </ul>
          ))}

          <span className="total">
            Total: {sum}
          </span>
        </>
      ) : (  
        <div className="empty_basket">Your basket is empty</div> 
      )
      }
    </div>
  </BouhtItem>
);

Basket.propTypes = {
  minus: PropTypes.func.isRequired, 
  plus: PropTypes.func.isRequired,
  basket: PropTypes.object.isRequired,
  sum: PropTypes.number.isRequired
};

export default Basket;
