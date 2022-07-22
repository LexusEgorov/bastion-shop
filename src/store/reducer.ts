import { createReducer } from "@reduxjs/toolkit";
import { Action } from "./action";


const initialState = {
  types: [{
    id: -1,
    type: '',
  }],
  standarts: [{
    id: -1,
    name: '',
  }],
  products: [{
    id: -1,
    name: '',
    typeId: -1,
    price: 0,
    standartId: -1, 
  }],
  cartProducts: [{
    id: -1,
    product: {},
    count: 0,
  }]
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(Action.INIT, (state) => {
      state.cartProducts = [];
      state.standarts = [];
      state.products = [];
      state.types = [];
    })
    .addCase(Action.TYPE.ADD, (state, action) => {
        state.types.push(action.payload);
    })
    .addCase(Action.STANDART.ADD, (state, action) => {
      state.standarts.push(action.payload);
    })
    .addCase(Action.PRODUCT.ADD, (state, action) => {
      state.products.push(action.payload);
    })
    .addCase(Action.CART.ADD, (state, action) => {
      state.cartProducts.push(action.payload);
    })
    .addCase(Action.CART.CHANGE, (state, action) => {
      const {id, count} = action.payload;
      const index = state.cartProducts.findIndex((item) => item.id === id);
      state.cartProducts[index].count = count;
    })
    .addCase(Action.CART.DELETE, (state, action) => {
      const {id} = action.payload;
      const index = state.cartProducts.findIndex((item) => item.id === id);
      state.cartProducts = [...state.cartProducts.slice(0, index), ...state.cartProducts.slice(index + 1)];
    })
    .addCase(Action.CART.CLEAR, (state) => {
      state.cartProducts = [];
    });
});

export default reducer;
