import Filters from './filters/filters';
import ShopList from './shop-list/shop-list';
import './styles/main.css'
function Main() : JSX.Element {
  return (
    <main>
      <div className="wide-container">
        <div className="main-header">
          <button className='go-back-btn'>Назад</button>
          <h2>Опоры трубопроводов</h2>
        </div>
        <section className='main-section'>
          <Filters />
          <ShopList />
        </section>
      </div>
    </main>
  );
}

export default Main;
