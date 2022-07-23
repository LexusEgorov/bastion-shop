import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { Action } from '../../store/action';
import { store } from '../../store/store';
import { generator } from '../../utils/utils';
import './shop-form.css'
import ShopTypes from './shop-types';

const generateId = generator();

function ShopForm() : JSX.Element {
  const dispatch = useAppDispatch();

  const [stateId, setId] = useState(0);
  const [stateName, setName] = useState('');
  const [stateType, setType] = useState(0);
  const [statePrice, setPrice] = useState(0);
  const [stateStandart, setStandart] = useState('');
  const [stateImg, setImg] = useState('');

  return (
    <section className="shop-form">
      <div className="wide-container">
        <div className="form-header">
          <h2>Добавление товара</h2>
        </div>
        <div className="small-container">
          <form action="">
            <label htmlFor="id">ID</label>
            <input type="number" name="id" id="id" placeholder="Id" min={1} required
              onChange={(evt) => {
                setId(Number(evt.target.value));
              }}
            />
            <label htmlFor="name">Название</label>
            <input type="text" name="name" id="name" placeholder="Название" required
              onChange={(evt) => {
                setName(evt.target.value);
              }}
            />
            <label htmlFor="type">Тип</label>
            <select name='type' id='type-select' required
              onChange={(evt) => {
                setType(Number(evt.target.value));  
              }}
            >
              <ShopTypes types={store.getState().types}/>
            </select>
            <label htmlFor="price">Цена</label>
            <input type="number" name="price" id="price" placeholder="Цена" min={0} required
              onChange={(evt) => {
                setPrice(Number(evt.target.value));
              }}
            />
            <label htmlFor="standart">ГОСТ</label>
            <input type="string" name="standart" id="standart" placeholder="ГОСТ" required
              onChange={(evt) => {
                setStandart(evt.target.value);
              }}
            />
            <label htmlFor="image">Изображение</label>
            <input type="file" name="image" id="image"
              onChange={(evt) => {
                setImg(URL.createObjectURL(evt.target.files!.item(0)!));
              }}
            />
            <button
              onClick={(evt) => {
                evt.preventDefault();
                try{
                  dispatch(Action.PRODUCT.ADD({
                    id: stateId,
                    name: stateName,
                    typeId: stateType,
                    price: statePrice,
                    standart: stateStandart,
                    img: stateImg,
                    isHit: stateName.toLowerCase().indexOf('о') !== -1,
                    isStock: stateName.toLowerCase().indexOf('а') !== -1,
                    inCart: false,
                  }));
                  dispatch(Action.STANDART.ADD({
                    id: generateId(),
                    name: stateStandart,
                    isActive: false,
                  }));
                  setId(1);
                  setName('');
                  setType(0);
                  setPrice(0);
                  setImg('');
                  setStandart('');
                } catch(err){
                  alert(err);
                }

              }}
            >Сохранить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ShopForm;
