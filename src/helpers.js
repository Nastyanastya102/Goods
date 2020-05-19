export const findDiscount = (state, action) => {
  const { payload } = action;
  const { discounts } = state;
  const item = discounts.find(i => i.product[0].id === payload.name || i.discount[0].id === payload.name);
  if (!item) return totalSum(state);
  return totalSum(setDiscount(state, item, action));
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

const setDiscount = (state, item, action) => {
  const { basket } = state;

  if (item.product[0].id in basket && item.discount[0].id in basket) {
    const much = basket[item.product[0].id].qnt / item.product[0].count;
    const dcnt = (basket[item.discount[0].id].price * item.discount[0].discount * Math.floor(much));
    const sale = basket[item.discount[0].id].qnt * basket[item.discount[0].id].price;
    return {
      ...state,
      basket:{
        ...basket,
        [item.discount[0].id]: { 
          ...basket[item.discount[0].id], 
          total: (+(sale - dcnt).toFixed(2) < 0) ? 0 : +(sale - dcnt).toFixed(2)},       
      },
    }
  }
  return state;
};