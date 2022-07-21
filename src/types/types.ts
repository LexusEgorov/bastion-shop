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

