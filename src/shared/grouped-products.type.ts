import { Product } from "./product.type";

export type GroupedProducts = {
  checkedProducts: Product[];
  uncheckedProducts: Product[];
};
