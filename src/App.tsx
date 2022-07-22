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

const shopTypes = [
  {id: 1, type: 'aaa'},
  {id: 2, type: 'bbb'}
];

function App() {
  const dispatch = useAppDispatch();
  dispatch(Action.INIT());
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Main /> } />
            <Route path='/cart' element={<Cart />} />
            <Route path='/add-type' element={<TypeForm />} />
            <Route path='/add-product' element={<ShopForm types={shopTypes}/>} />
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
