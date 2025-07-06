import { Product } from "./product";

export class Mobile extends Product {
  constructor(price: number, quantity: number) {
    super("Mobile", price, quantity);
  }
}
