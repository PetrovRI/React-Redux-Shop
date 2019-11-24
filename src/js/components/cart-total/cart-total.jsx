import React from 'react';
import { connect } from 'react-redux';
import './cart-total.scss';

const CartTotal = ({ total, count }) => {
  return (
    <div className="cart-total">
      <h3 className="cart-total__title">Итого</h3>
      <ul className="cart-total__list">
        <li className="cart-total__item">
          <span className="cart-total__price">Товары ({count})</span>
          <span className="cart-total__price-text">{total} ₽</span>
        </li>
        <li className="cart-total__item">
          <span className="cart-total__delivery">Самовывоз</span>
          <span className="cart-total__delivery-text">бесплатно</span>
        </li>
      </ul>
      <button className="btn cart-total__button">Перейти к оформлению</button>
    </div>
  );
};

const mapStateToProps = ({ basket: { orderTotal, countTotal } }) => {
  return {
    total: orderTotal,
    count: countTotal,
  };
};

export default connect(mapStateToProps)(CartTotal);
