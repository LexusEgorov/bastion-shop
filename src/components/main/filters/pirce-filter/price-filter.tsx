import './price-filter.css'

function PriceFilter() : JSX.Element{
  return (
    <div className="price-filter">
      <div className="filter-header">
        <h3>Цена, руб.</h3>
        <button className='filter-toggler'></button>
      </div>
      <div className="price-inputs">
        <div className="price-from">
          <label htmlFor="price-from-input">от</label>
          <input type="text" name="price-from-input" id="price-from-input" placeholder="0" maxLength={5}/>
        </div>
        <div className="price-to">
          <label htmlFor="price-to-input">до</label>
          <input type="text" name="price-to-input" id="price-to-input" placeholder='10000' maxLength={5}/>
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
