import { Store } from "../ecommerce/store";
import { Cart } from "../cart/cart";
import { ECommerceController } from "../../ecommerceController";
class Customer {
  private name: string;
  public palance: number;
  public cart: Cart;
  constructor(
    name: string,
    palance: number,
    Store: Store,
    ecommerceController: ECommerceController
  ) {
    this.name = name;
    this.palance = palance;
    this.cart = new Cart(ecommerceController);
  }
}
export { Customer };
