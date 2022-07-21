import CartItem from './cart-item/cart-item';
import OrderForm from './order-form/order-form';
import './styles/cart.css'

function Cart() : JSX.Element {
  return (
    <section className="cart">
      <div className="wide-container">
        <div className="cart-header">
          <h2>Корзина</h2>
        </div>
        <article className="cart-layout">
          <div className="shopping-list">
            <CartItem />                      
            <div className="shopping-list-footer">
              <button className='clear'>
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