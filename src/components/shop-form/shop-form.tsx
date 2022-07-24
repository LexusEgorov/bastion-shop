import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { Action } from '../../store/action';
import { store } from '../../store/store';
import { generator } from '../../utils/utils';
import { checkImgFieldError, checkNumberFieldError, checkTextFieldError, checkTypeFieldError } from '../../utils/validators';
import './shop-form.css'
import ShopTypes from './shop-types';

const generateId = generator();

function ShopForm() : JSX.Element {
  const dispatch = useAppDispatch();

  const [stateId, setId] = useState(0);
  const [errorId, setIdError] = useState(false);
  const [stateName, setName] = useState('');
  const [errorName, setNameError] = useState(false);
  const [stateType, setType] = useState(-1);
  const [errorType, setTypeError] = useState(false);
  const [statePrice, setPrice] = useState(0);
  const [errorPrice, setPriceError] = useState(false);
  const [stateStandart, setStandart] = useState('');
  const [errorStandat, setStandartError] = useState(false);
  const [stateImg, setImg] = useState('');
  const [errorImg, setImgError] = useState(false);

  return (
    <section className="shop-form">
      <div className="wide-container">
        <div className="form-header">
          <h2>Добавление товара</h2>
        </div>
        <div className="small-container">
          <form action="">
            <label htmlFor="id">ID</label>
            {errorId ? <span className='input-error'>Id должен быть от 1 до 999999</span> : <></>}
            <input type="number" name="id" id="id" placeholder="Id" min={1} required
              onChange={(evt) => {
                const value = Number(evt.target.value);
                setId(value);
                checkNumberFieldError(value, 1, 999999, setIdError);
              }}
            />
            <label htmlFor="name">Название</label>
            {errorName ? <span className='input-error'>Название товара должно быть от 5 до 20 символов</span> : <></>}
            <input type="text" name="name" id="name" placeholder="Название" required
              onChange={(evt) => {
                const value = evt.target.value;
                setName(value);
                checkTextFieldError(value, 5, 20, setNameError)
              }}
            />
            <label htmlFor="type">Тип</label>
            {errorType ? <span className='input-error'>Выберите тип</span> : <></>}
            <select name='type' id='type-select' required
              onChange={(evt) => {
                const value = Number(evt.target.value);
                setType(value);
                checkTypeFieldError(value, setTypeError);                 
              }}
            >
              <ShopTypes types={store.getState().types}/>
            </select>
            <label htmlFor="price">Цена</label>
            {errorPrice ? <span className='input-error'>Стоимость товара должна быть от 0 до 10000</span> : <></>}
            <input type="number" name="price" id="price" placeholder="Цена" min={0} required
              onChange={(evt) => {
                const value = Number(evt.target.value)
                setPrice(value);
                checkNumberFieldError(value, 0, 10000, setPriceError);
              }}
            />
            <label htmlFor="standart">ГОСТ</label>
            {errorStandat ? <span className='input-error'>ГОСТ должен быть от 4 до 15 символов</span> : <></>}
            <input type="string" name="standart" id="standart" placeholder="ГОСТ" required
              onChange={(evt) => {
                const value = evt.target.value;
                setStandart(value);
                checkTextFieldError(value, 4, 15, setStandartError);
              }}
            />
            <label htmlFor="image">Изображение</label>
            {errorImg ? <span className='input-error'>Выберите изображение</span> : <></>}
            <input type="file" name="image" id="image" accept='image/png, image/gif, image/jpeg, image/jpg'
              onChange={(evt) => {
                const value = evt.target.value;
                setImg(URL.createObjectURL(evt.target.files!.item(0)!));
                checkImgFieldError(value, setImgError);
              }}
            />
            <button
              className={errorId || errorType || errorImg || errorName || errorStandat || errorPrice ? 'disabled' : ''}
              disabled={errorId || errorType || errorImg || errorName || errorStandat || errorPrice}
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
