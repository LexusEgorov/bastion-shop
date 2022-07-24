import { createReducer } from "@reduxjs/toolkit";
import { Action } from "./action";

const initialState = {
  types: [{
    id: -1,
    type: 'Выберите тип',
  }],
  standarts: [{
    id: -1,
    name: '',
    isActive: false,
  }],
  products: [{
    id: -1,
    name: '',
    typeId: -1,
    price: 0,
    standart: '',
    img: '', 
    isHit: false,
    isStock: false,
    inCart: false,
  }],
  cartProducts: [{
    id: -1,
    productId: -1,
    count: 0,
  }]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Action.INIT, (state) => {
      state.standarts = [];
      state.cartProducts = [];
      state.products = [];
    })
    .addCase(Action.TYPE.ADD, (state, action) => {
      const index = state.types.findIndex((type) => type.id === action.payload.id);
      const {id, type} = action.payload;
      if(index === -1){
        if(id === 0 || type === ''){
          throw new Error('Не все поля формы заполнены');
        }
        state.types.push(action.payload);
      } else{
        throw new Error('Тип с таким id уже существует');
      }
    })
    .addCase(Action.STANDART.ADD, (state, action) => {
      const index = state.standarts.findIndex((standart) => standart.id === action.payload.id);
      if(index === -1){
        state.standarts.push(action.payload);
      }
    })
    .addCase(Action.STANDART.CHECK, (state, action) => {
      const index = state.standarts.findIndex((standart) => standart.id === action.payload.id);
      state.standarts[index].isActive = !state.standarts[index].isActive;
    })
    .addCase(Action.PRODUCT.ADD, (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      const {id, name, typeId, standart, img} = action.payload;
      if(index === -1){
        if(id === 0 || name === '' || typeId === -1 || standart === '' || img === ''){
          throw new Error('Не все поля формы заполнены');
        }
        state.products.push(action.payload);
      } else{
        throw new Error('Продукт с таким id уже существует');
      }
    })
    .addCase(Action.CART.ADD, (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload.productId);
      if(!state.products[index].inCart){
        state.products[index].inCart = true;
        state.cartProducts.push(action.payload);
      }
    })
    .addCase(Action.CART.CHANGE, (state, action) => {
      const {id, count} = action.payload;
      const index = state.cartProducts.findIndex((item) => item.id === id);
      state.cartProducts[index].count = count;
    })
    .addCase(Action.CART.DELETE, (state, action) => {
      const {id} = action.payload;
      const cartIndex = state.cartProducts.findIndex((item) => item.id === id);
      const productIndex = state.products.findIndex((product) => product.id === action.payload.productId);
      state.products[productIndex].inCart = false;
      state.cartProducts = [...state.cartProducts.slice(0, cartIndex), ...state.cartProducts.slice(cartIndex + 1)];
    })
    .addCase(Action.CART.CLEAR, (state) => {
      state.cartProducts = [];
    });
});

export default reducer;
