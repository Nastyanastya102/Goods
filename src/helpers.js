const findDiscount = (state, action) => {
  const { payload } = action;
  const { discounts } = state;
  const item = discounts.find(i => i.product[0].id === payload.name || i.discount[0].id === payload.name );
  if (!item) return totalSum(state);
  return totalSum(setDiscount(state, item));
};

const totalSum = (state) => {
  let result = 0;
  for (let item of Object.values(state.basket)) {
    result += item.total;
  }
  return {
    ...state,
    sum: +result.toFixed(2)
  }; 
};

const setDiscount = (state, item) => {
  const { basket } = state;

  if (item.product[0].id in basket && item.discount[0].id in basket) {
    const much = basket[item.product[0].id].qnt / item.product[0].count;
    const dcnt = (basket[item.discount[0].id].price * item.discount[0].discount * Math.floor(much));
    const sale = basket[item.discount[0].id].qnt * basket[item.discount[0].id].price;
    return {
      ...state,
      basket:{
        ...basket,
        [item.discount[0].id]: { ...basket[item.discount[0].id], total: +(sale - dcnt).toFixed(2), offers: true},
      },
    }
  }
  return state;
};

export const addItem = (state, action) => {
  const { payload } = action;
  const { basket, sum, total } = state;
  let newState;

  if (payload.name in basket) {
      newState = {
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
  }
  newState = { 
    ...state, 
    basket: {
      ...basket,
      [payload.name]: { qnt: 1, price: payload.price, total: payload.price, image: payload.image }
    },
    sum: +(sum + payload.price).toFixed(2),
    total: total + 1
  };
  return findDiscount(newState, action);
};

export const delItem = (state, action) => {
  const { payload } = action;
  let { basket, sum, total} = state;

  if (payload.name in basket && sum > 0 && total > 0) {
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