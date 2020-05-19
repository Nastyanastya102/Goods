import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { CardButton } from '../styles/Card';
import { Close } from '../styles/same';
import { Modal } from '../styles/Confirmation';

export const Сonfirmation = ({ modal, item, addToCard, removeFromCard, closeModalAction, basket, discounts }) => {
  const [date, setDate] = useState();
  const saleCard = discounts.find(i => i.product[0].id === item.name);
console.log(!!saleCard, item);

  const confirm = (e, del) => {
    del
    ? removeFromCard(item)
    : addToCard(item, date);
      setTimeout(() => {
      closeModalAction() 
    }, 0);
  };

  return (
    <>
      {modal
      ? <Modal>
          <div className="modal_content">
              <Close onClick={closeModalAction} className="close_modal">X</Close>
              <div className="item_info">
                <h3>{item.name}</h3>
                <img src={item.image} alt="product"/>
                <span>${item.price}</span>
              </div>
              {!!saleCard
                ? <p className="proposition">
                    We have COOL discount for you. Buy {saleCard.product[0].count} {saleCard.product[0].id} <br/>
                    and get -{(saleCard.discount[0].discount * 100)}% fo {saleCard.discount[0].id}
                  </p>
                : null
                }
              {(item.name in basket)
              ? <>
                  <h3>You already have {item.name} in your basket</h3>
                  <CardButton onClick={(e) => confirm(e, true)}>Remove from Card</CardButton>
                </>
              : <>
                  <div className="deliveryDate">
                    <label htmlFor="date">When do you want to get your order?</label>   
                      <input type="date" name="date" lang="en" onChange={(e) => setDate(e.target.value)}/>            
                  </div>
                  <CardButton onClick={confirm}>Confirm</CardButton>
                </>
              }  

          </div>
        </Modal>
      : null
      }
    </>
  )
};

Сonfirmation.propTypes = {
  discounts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  addToCard: PropTypes.func.isRequired, 
  closeModalAction: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired,
  basket: PropTypes.objectOf(PropTypes.object.isRequired).isRequired
};

export default Сonfirmation;
