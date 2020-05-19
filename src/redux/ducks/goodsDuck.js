import { takeEvery, put, all } from 'redux-saga/effects';
import { delItem, addItem, minusItem, plusItem } from '../../helpers';

const GET_PRODUCTS_URL = 'http://localhost:8000/products';
const GET_DISCOUNTS_URL = 'http://localhost:8000/discounts';

export const FETCH_PRODUCTS_PENDING = 'goods/goodsApp/FETCH_PRODUCTS_PENDING';
export const FETCH_PRODUCTS_SUCCESS = 'goods/goodsApp/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'goods/goodsApp/FETCH_PRODUCTS_ERROR';

export const ADD_ITEM = 'goods/goodsApp/ADD_ITEM';
export const REMOVE_ITEM = 'goods/goodsApp/REMOVE_ITEM';

export const PLUS = 'goods/goodsApp/PLUS';
export const MINUS = 'goods/goodsApp/MINUS';

export const OPEN_MODAL = 'goods/modalReducer/OPEN_MODAL';
export const CLOSE_MODAL = 'goods/modalReducer/CLOSE_MODAL';

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

export const addToCard = (payload, date) => ({
  type: ADD_ITEM,
  payload,
  date
});

export const removeFromCard = (payload) => ({
  type: REMOVE_ITEM,
  payload
});

export const plus = (payload) => ({
  type: PLUS,
  payload
});

export const minus = (payload) => ({
  type: MINUS,
  payload
});

export const openModalAction = (item) => ({
  type: OPEN_MODAL,
  payload: true,
  item
});

export const closeModalAction = () => ({
  type: CLOSE_MODAL,
  payload: false
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
    case PLUS:
      return plusItem(state, action);
    case MINUS:
      return minusItem(state, action);
    default:
      return state;
  }
};

export const modalReducer = (state = { modal: false, item: {} }, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modal: action.payload, item: action.item };
    case CLOSE_MODAL:
      return { ...state, modal: action.payload, item: {} };
    default:
      return state;
  }
}

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
  goodsApp,
  modalReducer
};
