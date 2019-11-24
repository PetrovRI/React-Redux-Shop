import React from 'react';
import './sorter.scss';

const Sorter = () => {
  return (
    <div className="sorter">
      <span className="sorter__title">Сортировать:</span>
      <ul className="sorter__list">
        <li className="sorter__item">По алфавиту</li>
        <li className="sorter__item">По цене</li>
        <li className="sorter__item">По рейтингу</li>
      </ul>
    </div>
  );
};

export default Sorter;
