import { Product } from "./product.models";
import { User } from "./user.models";

export interface Basket {
  id: number;
  price: number;
  number_products: number;
  user: User;
  date: Date;
  discount_code: string;
  products: number[];
}

export interface AddBasketDTO {
  user: number;
  date: string;
  discount_code: string;
}

export interface UpdateBasketDTO {
  date: string;
  discount_code: string;
}
