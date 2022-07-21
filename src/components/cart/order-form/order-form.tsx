import './order-form.css'

function OrderForm() : JSX.Element {
  return (
    <div className="order-form">
      <div className='form-header'>
        <h3>Заказ</h3>
      </div>
      <form action="#">
        <h4>Контактная информация</h4>
        <div className="inputs">
          <div className="fio field">
            <div className="input">
              <label htmlFor="fio">ФИО</label>
              <img src="./images/icons/fio.svg" alt="" width={14} height={14}/>
              <input type="text" name='fio' id='fio' placeholder='ФИО' required/>
            </div>
          </div>
          <div className="phone field">
            <div className="input">
              <label htmlFor="phone">Контактный телефон</label>
              <img src="./images/icons/phone-input.svg" alt="" width={14} height={14}/>
              <input type="text" name='phone' id='phone' placeholder='Контактный телефон' required/>
            </div>
          </div>
          <div className="email field">
            <div className="input">
              <label htmlFor="email">Email</label>
              <img src="./images/icons/email-input.svg" alt="" width={14} height={14}/>
              <input type="text" name='email' id='email' placeholder='Email' required/>
            </div>
          </div>
          <div className="organization field">
            <div className="input">
              <label htmlFor="organization">Организация / ИНН</label>
              <img src="./images/icons/organization.svg" alt="" width={14} height={14}/>
              <input type="text" name='organization' id='organization' placeholder='Организация / ИНН' required/>
            </div>
          </div>
        </div>
        <div className="form-footer">
          <div className="result-price">
            <span>Итого</span>
            <span className='price'>8 499 руб.</span>
          </div>
          <button className='sub' type='submit'>
            <img src="./images/icons/cart-form.svg" alt="" width={17} height={15}/>
            Оформить заказ
          </button>
          <button className='commercial'>
            <img src="./images/icons/commercial.svg" alt="" width={30} height={33}/>
            Коммерческое предложение
          </button>
        </div>
      </form>
    </div>
  );
}

export default OrderForm;
