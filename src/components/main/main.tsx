import { useState } from 'react';
import Categories from './categories/categories';
import Filters from './filters/filters';
import ShopList from './shop-list/shop-list';
import './styles/main.css'

function Main() : JSX.Element {
  const [minPrice, setMin] = useState(0);
  const [maxPrice, setMax] = useState(10000);
  
  return (
    <>
      <div className="wide-container">
        <div className="main-header">
          <div className="left-column">
            <button className='go-back-btn'>Назад</button>
            <h2>Опоры трубопроводов</h2>
          </div>
          <div className="right-column">
            <div className="sort">
              <p>Сначала популярные</p>
              <img src="images/icons/sort.svg" alt="" width={13} height={10}/>
            </div>
            <div className="view">
              <img className='active' src="images/icons/blocks-active.svg" alt="" width={10} height={10}/>
              <img src="images/icons/list.svg" alt="" width={10} height={9} />
            </div>
          </div>
        </div>
        <section className='main-section'>
          <Categories />
          <Filters minPrice={minPrice} maxPrice={maxPrice} setMin={setMin} setMax={setMax}/>
          <ShopList minPrice={minPrice} maxPrice={maxPrice}/>
          <div className="main-footer">
            <div className="main-footer-header">
              <p>Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1</p>
            </div>
            <div className="main-footer-content">
              <p>Надежность работы трубопровода в значительной мере зависит от правильности и прочности его крепления. Основные средства крепления трубопроводов — это опора, подвеска, кронштейны, скобы и другие части опорных конструкций. Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным существующим нормативным документам, а также изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.</p>
              <br />
              <p>Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и вертикальных участков трубопровода. Основным материалом деталей является сталь 17гс-12, 17г1с-12, 14г2-12, 09г2с-14, 20, 20к и пр.</p>
              <br />
              <p>Марка стали выбирается исходя от параметров окружающей среды, опоры могут использоваться при температуре от -60°C. Конструкции опор, представленные на сайте, отличаются между собой методом крепления с трубопроводом и несущей способностью.</p>
              <br />
              <p>Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные швы отвечают требованиям СНиП III-18-75, СНиП II-23-81. Резьбовые части опор обрабатываются антикоррозионной смазкой ПВК по ГОСТ 19537-83 или ее аналогом.</p>
            </div>
            <div className="hide">
              <p>Скрыть описание</p>
              <img src="images/icons/hide.svg" alt="" width={8} height={8}/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Main;
