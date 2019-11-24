import React from 'react';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container section">
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href="#">
              О компании
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Зарабатывайте с e-Shop.ru
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Партнерская программа
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="#">
              Стать Поставщиком
            </a>
          </li>
        </ul>

        <div className="footer__share"></div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">
            © 2000 – 2019 ООО «e-шоп». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
