import { useAppSelector } from '../../../../hooks/hooks';
import TypeCheckbox from './type-checkbox';
import './type-filter.css'

function TypeFilter() : JSX.Element {
  const types = useAppSelector((state) => state.types);

  return(
    <div className="type-filter">
      <div className="filter-header">
        <h3>Тип продукта</h3>
        <button className='filter-toggler'></button>
      </div>
      <div className="types-list">
        {
          types.map((type) => {
            if(type.id !== -1){
              return <TypeCheckbox id={type.id} type={type.type} isActive={type.isActive} key={type.id}/>
            }
            return '';
          })
        }
      </div>
    </div>
  );
}

export default TypeFilter;