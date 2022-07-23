import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { Action } from '../../store/action';
import './type-form.css'

function TypeForm() : JSX.Element {
  const [id, setId] = useState(1);
  const [type, setType] = useState('');
  const dispatch = useAppDispatch();

  return ( 
    <section className="type-form">
      <div className="wide-container">
        <div className="form-header">
          <h2>Добавление типа товара</h2>
        </div>
        <div className="small-container">
          <form action="">
            <label htmlFor="id">ID</label>
            <input type="number" name="id" id="id" min={1} placeholder="Id" required 
              value={id}
              onChange={(evt) => {
                setId(Number(evt.target.value));
              }}  
            />
            <label htmlFor="type">Тип</label>
            <input type="text" name="type" id="type" placeholder="Тип" required
              value={type}
              onChange={(evt) => {
                setType(evt.target.value);
              }}
            />
            <button
              onClick={(evt) => {
                evt.preventDefault();
                try {
                  dispatch(Action.TYPE.ADD({id: id, type: type}));
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
