import React from 'react';
import { connect } from 'react-redux';

import {
  productAddedToBasket,
  productRemovedFromBasket,
  allProductsRemovedToBasket,
} from '../../actions/basket';

import './basket-list.scss';

const BasketList = ({ items, onIncrease, onDecrease, onDelete }) => {
  return (
    <div className="basket">
      <div className="basket__wrapper">
        <h2 className="basket__title">Корзина</h2>

        <ul className="basket__list">
          {items.map(item => {
            const { id, img, title, count, total } = item;
            console.log(id, `это id`);
            return (
              <li key={id} className="basket__item">
                <div className="basket__img">
                  <img src={img} alt={title} />
                </div>
                <span className="basket__product-title">{title}</span>
                <span className="basket__count">{count}</span>
                <span className="basket__total-price">{total} ₽</span>
                <div>
                  <button
                    className="btn basket__button basket__button--decrease"
                    onClick={() => onDecrease(id)}
                  >
                    -
                  </button>
                  <button
                    className="btn basket__button basket__button--delete"
                    onClick={() => onDelete(id)}
                  >
                    удалить
                  </button>

                  <button
                    className="btn basket__button"
                    onClick={() => {
                      onIncrease(id);
                    }}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ basket: { cartItems } }) => {
  return {
    items: cartItems,
  };
};

const mapDispatchToProps = {
  onIncrease: productAddedToBasket,
  onDecrease: productRemovedFromBasket,
  onDelete: allProductsRemovedToBasket,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasketList);
