import {
  PRODUCT_ADDED_TO_BASKET,
  PRODUCT_REMOVED_FROM_BASKET,
  ALL_PRODUCTS_REMOVED_FROM_BASKET,
} from '../actions/actionConsts';

const updateProductItems = (cartItems, item, index) => {
  if (item.count == 0) {
    return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
  }
  if (index == -1) {
    return [...cartItems, item];
  }

  return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
};

const updateProductItem = (product, item = {}, quantity) => {
  const {
    id = product.id,
    img = product.coverImage,
    count = 0,
    title = product.title,
    price = product.price,
    total = 0,
  } = item;

  return {
    id,
    img,
    title,
    count: count + quantity,
    price,
    total: total + quantity * product.price,
  };
};

const updateOrder = (state, productId, quantity) => {
  const {
    dataList: { data },
    basket: { cartItems, countTotal, orderTotal },
  } = state;

  const product = data.find(product => product.id === productId);
  const itemIndex = cartItems.findIndex(({ id }) => id === productId);
  const item = cartItems[itemIndex];

  const newItem = updateProductItem(product, item, quantity);

  return {
    countTotal: countTotal + quantity,
    orderTotal: orderTotal + quantity * newItem.price,
    cartItems: updateProductItems(cartItems, newItem, itemIndex),
  };
};

const updateBasket = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      countTotal: 0,
    };
  }

  switch (action.type) {
    case PRODUCT_ADDED_TO_BASKET:
      return updateOrder(state, action.payload, 1);

    case PRODUCT_REMOVED_FROM_BASKET:
      return updateOrder(state, action.payload, -1);

    case ALL_PRODUCTS_REMOVED_FROM_BASKET:
      const item = state.basket.cartItems.find(
        ({ id }) => id == action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.basket;
  }
};

export default updateBasket;
