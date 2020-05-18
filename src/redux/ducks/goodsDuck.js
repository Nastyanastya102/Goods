import { takeEvery, put, all } from 'redux-saga/effects';
import { delItem, addItem } from '../../helpers';

const GET_PRODUCTS_URL = 'http://localhost:8000/products';
const GET_DISCOUNTS_URL = 'http://localhost:8000/discounts';


export const FETCH_PRODUCTS_PENDING = 'my-app/gettingData/FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'my-app/gettingData/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'my-app/gettingData/FETCH_PRODUCTS_ERROR';
export const FETCH_SPECIAL_OFFERS = 'my-app/gettingData/FETCH_SPECIAL_OFFERS';

export const ADD_ITEM = 'my-app/gettingData/ADD_ITEM';
export const REMOVE_ITEM = 'my-app/gettingData/REMOVE_ITEM';

export const SPECIAL_OFFERS = 'my-app/gettingData/SPECIAL_OFFERS';


export const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING
});

export const fetchProductsSuccess = data => ({
  type: FETCH_PRODUCTS_SUCCESS,
  data
});

export const fetchProductsError = (folder) => ({
  type: FETCH_PRODUCTS_ERROR,
  folder
});

export const addToCard = (payload) => ({
  type: ADD_ITEM,
  payload
});

export const removeFromCard = (payload, id) => ({
  type: REMOVE_ITEM,
  payload,
  id
});

export const addToOffers = (payload) => ({
  type: SPECIAL_OFFERS,
  payload
});

const initialState = {
  pending: false,
  error: false,
  shop: [],
  discounts: [],
  basket: {},
  total: 0,
  sum: 0
};

const goodsApp = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_PENDING:
      return { 
        ...state, 
        pending: true 
      }
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, shop: action.data[0].goods, discounts: action.data[1].discount }
    case FETCH_PRODUCTS_ERROR:
      return { ...state, error: true }
    case ADD_ITEM:
      return addItem(state, action);
    case REMOVE_ITEM:
      return delItem(state, action);
    default:
      return state;
  }
};

/* Saga */
export const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};

export function* watchWork() {
  try {
    const data = yield all([
      fetchData(GET_PRODUCTS_URL),
      fetchData(GET_DISCOUNTS_URL)
    ]);
    yield put({
      type: FETCH_PRODUCTS_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_ERROR });
    console.log(error);
  }
};

export function* watchLoadData() {
  yield takeEvery(FETCH_PRODUCTS_PENDING, watchWork);
};

export function* rootSaga() {
  yield watchLoadData();
};

export default {
  goodsApp
};
