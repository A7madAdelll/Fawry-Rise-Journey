import { Product } from "./product";
class MobleScratchCards extends Product {
  constructor(price: number, quantity: number) {
    super("MobleScratchCards", price, quantity);
  }
}
export { MobleScratchCards };
