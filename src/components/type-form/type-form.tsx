import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { Action } from '../../store/action';
import { checkNumberFieldError, checkTextFieldError } from '../../utils/validators';
import './type-form.css'

function TypeForm() : JSX.Element {
  const [id, setId] = useState(1);
  const [type, setType] = useState('');
  const dispatch = useAppDispatch();

  const [idError, setIdError] = useState(false);
  const [typeError, setTypeError] = useState(false);

  return ( 
    <section className="type-form">
      <div className="wide-container">
        <div className="form-header">
          <h2>Добавление типа товара</h2>
        </div>
        <div className="small-container">
          <form action="">
            <label htmlFor="id">ID</label>
            {idError ? <span className='input-error'>id должен быть от 1 до 999999</span> : <></>}
            <input type="number" name="id" id="id" placeholder="Id" required
              value={id}
              onChange={(evt) => {
                const inputedData = Number(evt.target.value);
                setId(inputedData);
                checkNumberFieldError(inputedData, 1, 999999, setIdError);
              }}  
            />
            <label htmlFor="type">Тип</label>
            {typeError ? <span className='input-error'>Тип должен быть от 3 до 15 символов</span> : <></>}
            <input type="text" name="type" id="type" placeholder="Тип" required
              value={type}
              onChange={(evt) => {
                const inputedData = evt.target.value;
                setType(inputedData);
                checkTextFieldError(inputedData, 3, 15, setTypeError);
              }}
            />
            <button
              className={idError || typeError ? 'disabled' : ''}
              disabled={idError || typeError}
              onClick={(evt) => {
                evt.preventDefault();
                try {
                  dispatch(Action.TYPE.ADD({id: id, type: type, isActive: false}));
                  setId(1);
                  setType('');
                } catch(err) {
                  alert(err);
                }
              }}
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TypeForm;
