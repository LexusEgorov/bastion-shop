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
  standartId: number; 
};

export type AppDispatchType = typeof store.dispatch;
