import { useState } from 'react';
import { useAppSelector } from '../../../hooks/hooks';
import './order-form.css'

function OrderForm() : JSX.Element {
  const products = useAppSelector((state) => state.products);
  const cartProducts = useAppSelector((state) => state.cartProducts);

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');

  let totalPrice = 0;

  for(const cartProduct of cartProducts){
    const index = products.findIndex((product) => product.id === cartProduct.productId);
    if(index !== -1){
      totalPrice += cartProduct.count * products[index].price;
    }  
  }

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
              <input type="text" name='fio' id='fio' placeholder='ФИО' required
                value={username}
                onChange={(evt) => {
                  setUsername(evt.target.value);
                }}
              />
            </div>
          </div>
          <div className="phone field">
            <div className="input">
              <label htmlFor="phone">Контактный телефон</label>
              <img src="./images/icons/phone-input.svg" alt="" width={14} height={14}/>
              <input type="text" name='phone' id='phone' placeholder='Контактный телефон' required
                value={phoneNumber}
                onChange={(evt) => {
                  setPhoneNumber(evt.target.value);
                }}
              />
            </div>
          </div>
          <div className="email field">
            <div className="input">
              <label htmlFor="email">Email</label>
              <img src="./images/icons/email-input.svg" alt="" width={14} height={14}/>
              <input type="text" name='email' id='email' placeholder='Email'
                value={email}
                onChange={(evt) => {
                  setEmail(evt.target.value);
                }}
              />
            </div>
          </div>
          <div className="organization field">
            <div className="input">
              <label htmlFor="organization">Организация / ИНН</label>
              <img src="./images/icons/organization.svg" alt="" width={14} height={14}/>
              <input type="text" name='organization' id='organization' placeholder='Организация / ИНН' 
                value={organization}
                onChange={(evt) => {
                  setOrganization(evt.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="form-footer">
          <div className="result-price">
            <span>Итого</span>
            <span className='price'>{totalPrice} руб.</span>
          </div>
          <button className='sub' type='submit'
            onClick={(evt) => {
              evt.preventDefault();
              if(username.length === 0){
                alert('Введите ФИО');
                return;
              }
              if(phoneNumber.length < 10){
                alert('Введите корректный номер телефона');
                return;
              }
              const orderDetails = {
                user: {
                  username: username,
                  phoneNumber: phoneNumber,
                  email: email,
                  organization: organization,
                },
                products: cartProducts.map((product) => (
                {
                  product: products[products.findIndex((productsItem) => productsItem.id === product.productId)],
                  count: product.count
                }  
                ))
              };
                console.log(orderDetails);
              }
            }
          >
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
