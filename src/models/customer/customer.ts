import { Store } from "../ecommerce/store";
import { Cart } from "../cart/cart";
import { ECommerceController } from "../../ecommerceController";
class Customer {
  private name: string;
  public balance: number;
  public cart: Cart;
  constructor(
    name: string,
    balance: number,
    Store: Store,
    ecommerceController: ECommerceController
  ) {
    this.name = name;
    this.balance = balance;
    this.cart = new Cart(ecommerceController);
  }
}
export { Customer };
