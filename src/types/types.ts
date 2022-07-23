import { type } from "os";
import { store } from "../store/store";

export type ShopType = {
  id: number;
  type: string;
};

export type CategoryType = {
  id: number;
  series: string;
  name: string;
  count: number;
};

export type CategoriesType = Array<CategoryType>;

export type ProductType = {
  id: number;
  name: string;
  typeId: number;
  price: number;
  standart: string;
  img: string;
  isHit : boolean;
  isStock: boolean; 
};

export type AppDispatchType = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;
