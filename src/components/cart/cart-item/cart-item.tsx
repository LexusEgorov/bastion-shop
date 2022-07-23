import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/hooks';
import { Action } from '../../../store/action';
import { ProductType } from '../../../types/types';
import './cart-item.css'

type CartItemProps = {
  item:{
    id: number;
    productId: number;
    count: number;
  }
  product: ProductType;
};

function CartItem({item, product} : CartItemProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const {id, productId, count} = item;
  const {name, standart, price, img} = product;

  const [countState, setCount] = useState(count);

  return (
    <div className="cart-item">
      <div className="left-column">
        <img src={img} alt="" width={120} height={116}/>
        <div className="info">
          <span className='standart'>{standart}</span>
          <h3>{name}</h3>
          <span className='price'>{price} руб.</span>
        </div>
      </div>
      <div className="right-column">
        <div className="adding-control">
          <button className='plus'
            onClick={() => {
              dispatch(Action.CART.CHANGE({id: id, count: countState + 1}))
              setCount(countState + 1)
            }}
          >+</button>
          <span className='counter'>{countState}</span>
          <button className='minus'
            onClick={() => {
              if(countState - 1 >= 1){
                dispatch(Action.CART.CHANGE({id: id, count: countState - 1}));
                setCount(countState - 1);
              } else {
                dispatch(Action.CART.DELETE({id: id, productId: productId}));
              }
            }}
          >-</button>
        </div>
        <span className='result-price'>{price * countState} руб.</span>
        <button className='delete' 
          onClick={() => {
            dispatch(Action.CART.DELETE({id: id, productId: productId}));
          }}
        >
          <img src="images/icons/trash-item.svg" alt="" width={18} height={18}/>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
