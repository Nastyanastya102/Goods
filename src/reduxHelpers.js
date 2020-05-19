import { findDiscount } from './helpers';

export const addItem = (state, action) => {
  const { payload, date } = action;
  const { basket, sum, total, discounts } = state;
  const item = discounts.find(i => i.product[0].id === payload.name);

  const newState = { 
    ...state, 
    basket: {
      ...basket,
      [payload.name]: { 
        qnt: 1, 
        price: payload.price, 
        total: payload.price, 
        image: payload.image, 
        delivery: date,
        offers: item ? true : false 
      }
    },
    sum: +(sum + payload.price).toFixed(2),
    total: total + 1
  };
  return findDiscount(newState, action);
};

export const delItem = (state, action) => {
  const { payload } = action;
  let { basket } = state;

  if (payload.name in basket) {
   const newState = {
      ...state,
      basket: {
        ...basket,
      },
      total: +(state.total - basket[payload.name].qnt).toFixed(2),
      sum: +(state.sum - (basket[payload.name].qnt * basket[payload.name].price)).toFixed(2)
    };
    delete newState.basket[payload.name]
    return findDiscount(newState, action)
  }
  return state;
};

export const plusItem = (state, action) => {
  const { payload } = action;
  const { basket, sum, total } = state;
  const newState = {
      ...state, 
        basket: {
          ...basket,
      [payload.name]: { 
        ...basket[payload.name],
        qnt: basket[payload.name].qnt + 1,
        total: +(basket[payload.name].total + basket[payload.name].price).toFixed(2)
      } 
      },
      sum: +(sum + payload.price).toFixed(2),
      total: total + 1
  };
  return findDiscount(newState, action);
};

export const minusItem = (state, action) => {
  const { payload } = action;
  let { basket, sum, total } = state;

  if (payload.name in basket && sum > 0) {
   const newState = {
      ...state,
      basket: {
        ...basket,
        [payload.name]: 
        (basket[payload.name].qnt > 0) 
        ? {
            ...basket[payload.name], 
            qnt: basket[payload.name].qnt - 1,
            total: +(basket[payload.name].total - basket[payload.name].price).toFixed(2)
          } 
        : { ...basket[payload.name] }
      },
      total: --total,
    };
  return findDiscount(newState, action);
  }
  return state;
};
