import { Product } from "./product";
import { Expireable } from "../interfaces/expireable_interfase";

class Biscuits extends Product implements Expireable {
  expiryDate: Date;

  constructor(price: number, date: Date, quantity: number) {
    super("Biscuits", price, quantity);
    this.expiryDate = date;
  }
}
export { Biscuits };
