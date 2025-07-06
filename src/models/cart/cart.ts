import { Product } from "../products/product";
import { Biscuits } from "../products/biscuits";
import { Cheese } from "../products/cheese";
import { Mobile } from "../products/mobile";
import { MobleScratchCards } from "../products/mobile_scratch_cards";
import { Tv } from "../products/tv";
import { Store } from "../ecommerce/store";
import { ECommerceController } from "../../ecommerceController";
type ProductsTypes =
  | "Cheese"
  | "Tv"
  | "Mobile"
  | "MobleScratchCards"
  | "Biscuits";

type ProductClass =
  | typeof Biscuits
  | typeof Cheese
  | typeof Mobile
  | typeof MobleScratchCards
  | typeof Tv;

function convertProductClassToString(
  productClass: ProductClass
): ProductsTypes {
  return productClass.name as ProductsTypes;
}

type CartItem = {
  quantity: number;
  price: number;
  weight?: number;
};

type CartItems = Record<string, CartItem>;

class Cart {
  private products: CartItems = {};
  private ecommerceController: ECommerceController;
  constructor(ecommerceController: ECommerceController) {
    this.ecommerceController = ecommerceController;
  }

  add(productClass: ProductClass, quantity: number) {
    if (quantity <= 0) {
      throw new Error("Quantity must be greater than 0");
    }

    const canAddingBeDone = this.ecommerceController.CheckIfCanAddProductToCart(
      productClass,
      quantity
    );

    if (!canAddingBeDone) {
      throw new Error(
        `Not enough ${convertProductClassToString(productClass)} in the store`
      );
    }

    const key = convertProductClassToString(productClass);

    if (!this.products[key]) {
      this.products[key] = {
        quantity: quantity,
        price: this.ecommerceController.getprice(productClass) * quantity,
      };
      if (productClass === Tv || productClass === Cheese) {
        this.products[key].weight =
          this.ecommerceController.getWeight(productClass) * quantity;
      }
      return;
    }
    this.products[key].quantity += quantity;
    this.products[key].price += this.ecommerceController.getprice(productClass);

    if (productClass === Tv || productClass === Cheese) {
      const currentWeight = this.products[key].weight || 0;
      this.products[key].weight =
        currentWeight +
        this.ecommerceController.getWeight(productClass) * quantity;
    }
  }

  getCartItems(): CartItems {
    return this.products;
  }

  remove(productClass: ProductClass, quantity: number) {
    const key = productClass.name;

    if (!this.products[key]) {
      throw new Error(`${key} is not in the cart`);
    }

    this.products[key].quantity -= quantity;

    if (this.products[key].quantity <= 0) {
      delete this.products[key];
    }
  }
}

export { Cart };
