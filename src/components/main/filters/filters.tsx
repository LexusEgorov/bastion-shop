import PriceFilter from "./pirce-filter/price-filter";
import './styles/filters.css'
import TypeFilter from "./type-filter/type-filter";

type FiltersProps = {
  minPrice: number,
  maxPrice: number,
  setMin : React.Dispatch<React.SetStateAction<number>>;
  setMax : React.Dispatch<React.SetStateAction<number>>;
}

function Filters({minPrice, maxPrice, setMin, setMax} : FiltersProps) : JSX.Element{
  return (
    <div className="filters">
      <div className="filters-header">
        <img src='./images/icons/filters.svg' alt="" width={15} height={15}/>
        <h3>Фильтры</h3>
      </div>
      <PriceFilter minPrice={minPrice} maxPrice={maxPrice} setMin={setMin} setMax={setMax}/>
      <TypeFilter />
      <button className="filters-reset">Сбросить фильтры</button>
    </div>
  );
}

export default Filters;
