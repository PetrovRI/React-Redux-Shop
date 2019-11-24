import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Search from '../search/search.jsx';

import './header.scss';

const Header = ({ total }) => {
  return (
    <header className="header">
      <div className=" header__wrapper container section">
        <Link className="header__logo" to="/">
          e-Shop
        </Link>
        <Search />
        <Link className="header__basket" to="/basket">
          <img
            className="header__basket-icon"
            src="/assets/img/shopping-bag.svg"
            alt=""
          />
          Корзина
          {total > 0 && <span className="header__basket-count"> {total}</span>}
        </Link>
      </div>
    </header>
  );
};

const mapStateToProps = ({ basket: { countTotal } }) => {
  return {
    total: countTotal,
  };
};

export default connect(mapStateToProps)(Header);
