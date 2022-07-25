import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404/404';
import Cart from './components/cart/cart';
import Layout from './components/layout/layout';
import Main from './components/main/main';
import ShopForm from './components/shop-form/shop-form';
import TypeForm from './components/type-form/type-form';
import { useAppDispatch } from './hooks/hooks';
import { Action } from './store/action';

function App() {
  const dispatch = useAppDispatch();
  dispatch(Action.INIT());
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/bastion-shop/' element={<Layout />}>
            <Route index element={<Main /> } />
            <Route path='/bastion-shop/cart' element={<Cart />} />
            <Route path='/bastion-shop/add-type' element={<TypeForm />} />
            <Route path='/bastion-shop/add-product' element={<ShopForm />} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
