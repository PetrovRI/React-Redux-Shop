import React from 'react';
import './productList.scss';

const ProductList = ({ data, onAddedToBasket }) => {
  return (
    <ul className="product-list">
      {data.map(product => {
        const { id, title, author, price, coverImage } = product;

        return (
          <li className="product-list__item" key={id}>
            <div className="product-list__wrapper">
              <a href="#" className="product-list__wrapper-img">
                <img
                  className="product-list__img"
                  src={coverImage}
                  alt={title}
                />
              </a>
              <div className="p">
                <span className="product-list__price">{price} ₽</span>
              </div>
              <span className="product-list__title">{title}</span>
              <span className="product-list__author">{author}</span>

              <button
                className="btn product-list__button"
                onClick={() => onAddedToBasket(product.id)}
              >
                в корзину
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
