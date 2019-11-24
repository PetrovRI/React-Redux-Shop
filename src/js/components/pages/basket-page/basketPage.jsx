import React from 'react';
import { connect } from 'react-redux';
import BasketList from '../../basket-list/basket-list.jsx';
import CartTotal from '../../cart-total/cart-total.jsx';
import EmptyBasket from '../../empty-basket/empty-basket.jsx';
import './basket-page.scss';

const BasketPage = ({ total }) => {
  console.log(total);

  return (
    <section className="basket-page">
      <div className="container">
        {total <= 0 ? (
          <EmptyBasket />
        ) : (
          <div className="basket-page__wrapper">
            <BasketList />
            <CartTotal />
          </div>
        )}
      </div>
    </section>
  );
};

const mapStateToProps = ({ basket: { countTotal } }) => {
  return {
    total: countTotal,
  };
};

export default connect(mapStateToProps)(BasketPage);
