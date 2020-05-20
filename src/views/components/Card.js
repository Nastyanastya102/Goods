import React from 'react';
import PropTypes from 'prop-types';

import { CardImage, CardItem, CardButton } from '../styles/Card';

const Card = ({ shop, openModalAction }) => (
  <>
    {shop ? (
      shop.map( (item, index) => (
        <CardItem key={index}>
          <CardImage src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <span>${item.price}</span>
          <span>Per: {item.measure}</span>
          <CardButton onClick={() => openModalAction(item)}>Add to Cart</CardButton>
        </CardItem>
      ))
    ) : (
      <p>Sorry, any goods for you</p>
    )}
  </>
);

Card.propTypes = {
  openModalAction: PropTypes.func.isRequired,
  shop: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Card;
