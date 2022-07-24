import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { debounce } from 'ts-debounce';
import './price-filter.css'

type PriceFilterProps = {
  minPrice: number,
  maxPrice: number,
  setMin : React.Dispatch<React.SetStateAction<number>>;
  setMax : React.Dispatch<React.SetStateAction<number>>;
}

function PriceFilter({minPrice, maxPrice, setMin, setMax} : PriceFilterProps) : JSX.Element{
  const updatePriceDebounced = debounce((values) => {
    const min : number = Number(values[0]);
    const max : number = Number(values[1]);
    setMin(Number(min.toFixed(0)));
    setMax(Number(max.toFixed(0)));
  }, 50);

  return (
    <div className="price-filter">
      <div className="filter-header">
        <h3>Цена, руб.</h3>
        <button className='filter-toggler'></button>
      </div>
      <div className="price-inputs">
        <div className="price-from">
          <label htmlFor="price-from-input">от</label>
          <input type="text" name="price-from-input" id="price-from-input" placeholder="0" maxLength={5} value={minPrice} readOnly/>
        </div>
        <div className="price-to">
          <label htmlFor="price-to-input">до</label>
          <input type="text" name="price-to-input" id="price-to-input" placeholder='10000' maxLength={5} value={maxPrice} readOnly/>
        </div>
      </div>
      <Nouislider id='slider' start={[minPrice, maxPrice]} step={1} range={{min: 0, max: 10000}}
        onUpdate={updatePriceDebounced}
      />
    </div>
  );
}

export default PriceFilter;
