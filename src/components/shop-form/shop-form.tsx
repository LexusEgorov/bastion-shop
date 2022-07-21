import { ShopType } from '../../types/types';
import './shop-form.css'
import ShopTypes from './shop-types';

type ShopFormProps = {
  types: Array<ShopType>
};

function ShopForm({types} : ShopFormProps) : JSX.Element {
  return (
    <section className="shop-form">
      <div className="wide-container">
        <div className="form-header">
          <h2>Добавление товара</h2>
        </div>
        <div className="small-container">
          <form action="">
            <label htmlFor="id">ID</label>
            <input type="number" name="id" id="id" placeholder="Id" required/>
            <label htmlFor="name">Название</label>
            <input type="text" name="name" id="name" placeholder="Название" required/>
            <label htmlFor="type">Тип</label>
            <select name='type' id='type-select'>
              <ShopTypes types={types}/>
            </select>
            <label htmlFor="price">Цена</label>
            <input type="number" name="price" id="price" placeholder="Цена" required/>
            <label htmlFor="standart">ГОСТ</label>
            <input type="string" name="standart" id="standart" placeholder="ГОСТ" required/>
            <label htmlFor="image">Изображение</label>
            <input type="file" name="image" id="image"/>
            <button>Сохранить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ShopForm;
