import PriceFilter from "./pirce-filter/price-filter";
import './styles/filters.css'
import TypeFilter from "./type-filter/type-filter";

function Filters() : JSX.Element{
  return (
    <div className="filters">
      <div className="filters-header">
        <img src='./images/icons/filters.svg' alt="" width={15} height={15}/>
        <h3>Фильтры</h3>
      </div>
      <PriceFilter />
      <TypeFilter />
      <button className="filters-reset">Сбросить фильтры</button>
    </div>
  );
}

export default Filters;
