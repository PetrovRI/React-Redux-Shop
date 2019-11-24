import React from 'react';
import './search.scss';

const Search = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="искать на e-Shop"
      />
      <button className="search__button">поиск</button>
    </div>
  );
};

export default Search;
