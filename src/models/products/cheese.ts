import { Product } from "./product";
import { Expireable } from "../interfaces/expireable_interfase";
import { Shipable } from "../interfaces/shipable_interface";
export class Cheese extends Product implements Expireable, Shipable {
  weight: number;
  expiryDate: Date;

  constructor(price: number, weight: number, date: Date, quantity: number) {
    super("Cheese", price, quantity);
    this.expiryDate = date;
    this.weight = weight;
  }
}
