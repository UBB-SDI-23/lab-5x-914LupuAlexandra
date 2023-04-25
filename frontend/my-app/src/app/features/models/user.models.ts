import { Basket } from "./basket.models";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  address: string;
  phone_number: string;
  email: string;
}
