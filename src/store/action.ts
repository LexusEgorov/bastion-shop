import { createAction } from "@reduxjs/toolkit";

const StandartActions = {
  ADD: createAction<{id: number, name: string, isActive: boolean}>('standarts/add'),
  CHECK: createAction<{id: number}>('standarts/check'),
};

const TypeActions = {
  ADD: createAction<{id: number, type: string, isActive: boolean}>('types/add'),
  CHECK: createAction<{id: number}>('types/check')
}; 

const ProductActions = {
  ADD: createAction<{
    id: number,
    name: string,
    typeId: number,
    price: number,
    standart: string,
    img: string,
    isHit: boolean,
    isStock: boolean,
    inCart: boolean,
  }>('products/add'),
};

const CartActions = {
  ADD: createAction<{
    id: number,
    productId: number,
    count: number,
  }>('cart/add'),
  CHANGE: createAction<{id: number, count: number}>('cart/change'),
  DELETE: createAction<{id: number, productId: number}>('cart/delete'),
  CLEAR: createAction('cart/clear'),
};

const Action = {
  INIT: createAction('app/init'),
  STANDART: StandartActions,
  TYPE: TypeActions,
  PRODUCT: ProductActions,
  CART: CartActions,
};

export {Action};
