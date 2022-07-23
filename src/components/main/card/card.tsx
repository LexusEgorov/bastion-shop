import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { Action } from '../../../store/action';
import { generator } from '../../../utils/utils';
import './card.css'

type CardProps = {
  product: {
    id: number,
    name: string,
    typeId: number,
    price: number,
    standart: string, 
    img: string,
    isHit: boolean,
    isStock: boolean,
    inCart: boolean,
  }
}

const generateId = generator();

function Card({product} : CardProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const {id, name, price, standart, isHit, isStock, inCart, img} = product;
  const [countState, setCount] = useState(1);
  return (
    <div className="card">
      <img src={img} alt="Изображение товара" width={180} height={200}/>
      <div className="text-content">
        <span className="standart">{standart}</span>
        <h3>{name}</h3>
        <div className="add-to-cart">
          <span className="price">{price} руб.</span>
          <div className="adding-control">
            <button className='plus' onClick={() => {setCount(countState + 1)}}>+</button>
            <span className='counter'>{countState}</span>
            <button className='minus' onClick={() => {setCount(countState - 1 < 0 ? 0 : countState - 1)}}>-</button>
          </div>
        </div>
      </div>
      <div className="buttons">
        {
          inCart ? (
            <button className='add added'
              onClick={() => {
                dispatch(Action.CART.ADD({id: generateId(), productId: id, count: countState}));
              }}
            >
              <img src="images/icons/cart-btn.svg" alt="" width={15} height={13}/>
              В корзине
            </button>
          ) : (
            <button className='add'
              onClick={() => {
                dispatch(Action.CART.ADD({id: generateId(), productId: id, count: countState}));
              }}
            >
              <img src="images/icons/cart-btn.svg" alt="" width={15} height={13}/>
              В корзину
            </button>
          )
        }
        
        <button className='show-more'>Подробнее</button>
      </div>
      <div className="special">
        {
          isHit ? <span className='hit'>Хит</span> : <></>
        }
        {
          isStock ? <span className='stock'>Акция</span> : <></>
        }
      </div>
      <div className="favorite">
        <img src="images/icons/favorite-card.svg" alt="" width={12} height={12}/>
        <span>В избранное</span>
      </div>
    </div>
  );
}

export default Card;
