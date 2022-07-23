import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import './styles/header.css';

function Header() : JSX.Element {
  const cartCount = useAppSelector((state) => state.cartProducts.length);

  return(
    <header className="page-header">
      <div className="wide-container">
        <div className="upper-container">
          <nav className="main-nav">
            <Link to='/add-type'>Типы продуктов</Link>
            <Link to='/add-product'>Продукты</Link>
            <a href="">Выгоды для вас</a>
            <a href="">Гарантии</a>
            <a href="">Контакты</a>
          </nav>
          <ul className="header-info">
            <li className="phone">
              <img src="./images/icons/header-phone.svg" alt="" width="15" height="15"/>
              <a href="tel:+74993807890">+7 (499) 380-78-90</a>
            </li>
            <li className="geo">
              <img src="images/icons/header-geo.svg" alt="" width="10" height="13"/>
              <p>Москва</p>
            </li>
            <li className="mail">
              <img src="images/icons/header-mail.svg" alt="" width="14" height="11"/>
              <a href="mailto: info@bastion.pro">info@bastion.pro</a>
            </li>
          </ul>
        </div>
      </div>
        <div className="middle-container">
          <div className="wide-container">
            <Link to="/" className="logo">
              <img src="images/logo.svg" alt="Bastion Group" width="82" height="70"/>
              <h1>Производитель металлических изделий №1</h1>
            </Link>
            <button className="catalog-btn">
              <img src="images/icons/catalog.svg" alt="" width="17" height="17"/>
              Каталог
            </button>
            <form className="search">
              <input type="text" name="search-field" id="search-field" placeholder="Поиск по названию"/>
              <button type="submit"></button>
            </form>
            <div className="buttons">
              <button className="favorite-btn btn">
                <img src="images/icons/favorite.svg" alt="" width="19" height="18"/>
                Избранное
              </button>
              <Link to='/cart' className="shopping-cart-btn btn">
                <div className="image">
                  <img src="images/icons/cart.svg" alt="" width="20" height="20"/>
                  <div className="count-info">
                    <span>{cartCount}</span>
                  </div>
                </div>
                Корзина
              </Link>
            </div>
          </div>
          </div>
        <div className="lower-container">
          <div className="wide-container">
            <ul>
              <li>Главная</li>
              <li>Интернет-магазин</li>
              <li>Опоры трубопроводов</li>
            </ul>
          </div>
        </div>
    </header>
  );
}

export default Header;
