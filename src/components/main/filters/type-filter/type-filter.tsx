import './type-filter.css'

function TypeFilter() : JSX.Element {
  return(
    <div className="type-filter">
      <div className="filter-header">
        <h3>Тип продукта</h3>
        <button className='filter-toggler'></button>
      </div>
    </div>
  );
}

export default TypeFilter;