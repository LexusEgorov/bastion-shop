import { createAction } from "@reduxjs/toolkit";
import { ProductType } from "../types/types";

const StandartActions = {
  ADD: createAction<{id: number, name: string}>('standarts/add'),
};

const TypeActions = {
  ADD: createAction<{id: number, type: string}>('typse/add'),
}; 

const ProductActions = {
  ADD: createAction<{
    id: number,
    name: string,
    typeId: number,
    price: number,
    standartId: number 
  }>('products/add'),
};

const CartActions = {
  ADD: createAction<{
    id: number,
    product: ProductType,
    count: number,
  }>('cart/add'),
  CHANGE: createAction<{id: number, count: number}>('cart/change'),
  DELETE: createAction<{id: number}>('cart/delete'),
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
