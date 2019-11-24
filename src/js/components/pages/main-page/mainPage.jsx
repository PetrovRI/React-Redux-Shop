import React from 'react';
import Promo from '../../promo/promo.jsx';
import ProductListContainer from '../../product-list/productListContainer.jsx';
import ProductFilter from '../../product-filter/product-filter.jsx';
import Sorter from '../../sorter/sorter.jsx';
import './main-page.scss';

const MainPage = () => {
  return (
    <section className="main-page container">
      <Promo />
      <div className="main-page__wrapper">
        <div className="main-page__wrapper-left">
          <ProductFilter />
        </div>

        <div className="main-page__wrapper-right">
          <Sorter />
          <div className="main-page__wrapper-list">
            <ProductListContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
