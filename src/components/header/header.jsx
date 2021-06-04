import React from 'react';

import logoImg from '../../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a className="header__logo logo" href="/">
          <img className="logo__img" src={logoImg} alt="Логотип интернет-магазина - Avto-Moto" width="134" height="55" />
        </a>
        <nav className="header__nav main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <a href="" className="main-nav__link">
                Автомобили
              </a>
            </li>
            <li className="main-nav__item">
              <a href="" className="main-nav__link">
                Контакты
              </a>
            </li>
            <li className="main-nav__item">
              <a href="" className="main-nav__link">
                Услуги
              </a>
            </li>
            <li className="main-nav__item">
              <a href="" className="main-nav__link">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
