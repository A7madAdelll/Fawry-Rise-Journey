import { Product } from "./product";
import { Shipable } from "../interfaces/shipable_interface";
export class Tv extends Product implements Shipable {
  weight: number;
  constructor(price: number, weight: number, quantity: number) {
    super("Tv", price, quantity);
    this.weight = weight;
  }
}
