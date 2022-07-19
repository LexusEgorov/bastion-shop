import './card.css'

function Card(){
  return (
    <div className="card">
      <img src="images/shop-item.jpg" alt="Изображение товара" width={180} height={200}/>
      <div className="text-content">
        <span className="standart">ГОСТ 14911-82</span>
        <h3>Опора тавровая хомутовая ТХ</h3>
        <div className="add-to-cart">
          <span className="price">849.9 руб.</span>
          <div className="adding-control">
            <button className='plus'>+</button>
            <span className='counter'>3</span>
            <button className='minus'>-</button>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className='add'>
          <img src="images/icons/cart-btn.svg" alt="" width={15} height={13}/>
          В корзину
        </button>
        <button className='show-more'>Подробнее</button>
      </div>
      <div className="special">
        <span className='hit'>Хит</span>
        <span className='discount'>Скидка</span>
        <span className='stock'>Акция</span>
      </div>
      <div className="favorite">
        <img src="images/icons/favorite-card.svg" alt="" width={12} height={12}/>
        <span>В избранное</span>
      </div>
    </div>
  );
}

export default Card;
