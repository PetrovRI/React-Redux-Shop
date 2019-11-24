import {
  PRODUCT_ADDED_TO_BASKET,
  PRODUCT_REMOVED_FROM_BASKET,
  ALL_PRODUCTS_REMOVED_FROM_BASKET,
} from '../actions/actionConsts';

const productAddedToBasket = productId => {
  return {
    type: PRODUCT_ADDED_TO_BASKET,
    payload: productId,
  };
};

const productRemovedFromBasket = productId => {
  return {
    type: PRODUCT_REMOVED_FROM_BASKET,
    payload: productId,
  };
};

const allProductsRemovedToBasket = productId => {
  return {
    type: ALL_PRODUCTS_REMOVED_FROM_BASKET,
    payload: productId,
  };
};

export {
  productAddedToBasket,
  productRemovedFromBasket,
  allProductsRemovedToBasket,
};
