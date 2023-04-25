import { Basket } from "./basket.models";

export interface Product {
  id: number;
  title: string;
  type: string;
  color: string;
  price: number;
  size: string;
  baskets: Basket[];
}

export interface ProductDTO {
  title: string;
  type: string;
  color: string;
  price: number;
  size: string;
}
