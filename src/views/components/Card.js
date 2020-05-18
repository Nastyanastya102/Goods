import React from 'react';
import PropTypes from 'prop-types';

import { CardImage, CardWrapper, CardItem, CardButton } from '../styles/Card';

const Card = ({ shop, basket, addToCard, removeFromCard }) => {
  return (
    <CardWrapper>
      <h2>All goods</h2>
      <div className="container">
        {shop
        ? shop.map( (item, index) => (
            <CardItem key={index}>
              <CardImage src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <span>${item.price}</span>
              <span>Per: {item.measure}</span>
              <CardButton onClick={() => addToCard(item, index)}>Add to Cart</CardButton>
              {
              ( ([item.name] in basket && basket[item.name].qnt ) )
              ? <CardButton onClick={() => removeFromCard(item, index)}>Remove from Card</CardButton>
              : <CardButton removed={true}>Remove from Card</CardButton>
              }
            </CardItem>
        ))
        : <p>Sorry, any goods for you</p>
        }
      </div>     
    </CardWrapper>
  )
};

Card.propTypes = {
  addToCard: PropTypes.func.isRequired, 
  removeFromCard: PropTypes.func.isRequired,
  basket: PropTypes.object.isRequired,
  shop: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Card;
