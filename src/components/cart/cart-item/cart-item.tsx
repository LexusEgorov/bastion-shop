import './cart-item.css'

function CartItem() : JSX.Element {
  return (
    <div className="cart-item">
      <div className="left-column">
        <img src="images/shop-item.jpg" alt="" width={120} height={116}/>
        <div className="info">
          <span className='standart'>ГОСТ 14911-82</span>
          <h3>Опора подвижная ОПБ2</h3>
          <span className='price'>849.9 руб.</span>
        </div>
      </div>
      <div className="right-column">
        <div className="adding-control">
          <button className='plus'>+</button>
          <span className='counter'>3</span>
          <button className='minus'>-</button>
        </div>
        <span className='result-price'>2549.7 руб.</span>
        <button className='delete'>
          <img src="images/icons/trash-item.svg" alt="" width={18} height={18}/>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
