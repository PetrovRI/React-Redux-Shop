import React from 'react';
import { Link } from 'react-router-dom';
import './empty-basket.scss';

const EmptyBasket = ({}) => {
  return (
    <div className="empty-basket">
      <h3 className="empty-basket__title">Ваша корзина пуста</h3>
      <p className="empty-basket__text">
        Выберите нужный Вам товар из каталога интернет-магазина и добавьте его в
        корзину.
      </p>
      <Link className="btn empty-basket__button" to="/">
        в каталог
      </Link>
    </div>
  );
};

export default EmptyBasket;
