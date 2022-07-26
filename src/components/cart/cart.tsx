import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Action } from '../../store/action';
import CartItem from './cart-item/cart-item';
import OrderForm from './order-form/order-form';
import './styles/cart.css'

function Cart() : JSX.Element {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cartProducts);
  const products = useAppSelector((state) => state.products);

  return (
    <section className="cart">
      <div className="wide-container">
        <div className="cart-header">
          <h2>Корзина</h2>
        </div>
        <article className="cart-layout">
          <div className="shopping-list">
            {
              cartItems.map((item) => <CartItem item={item} product={products[products.findIndex((product) => product.id === item.productId)]} key={item.id}/>)
            }                      
            <div className="shopping-list-footer">
              <button
                className='clear'
                onClick={() => {
                  dispatch(Action.CART.CLEAR())
                }}
              >
                <img src="images/icons/trash.svg" alt="" width={18} height={18}/>
                Очистить корзину
              </button>
            </div>
          </div>
          <div className="order">
            <OrderForm/>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Cart;
