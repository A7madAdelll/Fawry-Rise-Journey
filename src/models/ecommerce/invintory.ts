import { Biscuits } from "../products/biscuits";
import { Cheese } from "../products/cheese";
import { Mobile } from "../products/mobile";
import { MobleScratchCards } from "../products/mobile_scratch_cards";
import { Tv } from "../products/tv";
import { Product } from "../products/product";

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
class Inventory {
  public products: Record<ProductsTypes, { product: Product }>;

  constructor() {
    this.products = {
      Biscuits: {
        product: new Biscuits(10, new Date("2022-01-01"), 10),
      },
      Cheese: {
        product: new Cheese(50, 1, new Date("2022-01-01"), 1000),
      },
      Tv: {
        product: new Tv(1000, 5, 1000),
      },
      Mobile: {
        product: new Mobile(800, 10),
      },
      MobleScratchCards: {
        product: new MobleScratchCards(5, 10),
      },
    };
  }
  getprice(productClass: ProductClass) {
    return this.products[productClass.name as ProductsTypes].product.price;
  }
  getWeight(productClass: ProductClass): number {
    if ("weight" in this.products[productClass.name as ProductsTypes].product)
      return (this.products[productClass.name as ProductsTypes].product as any)
        .weight;
    else {
      return 0;
    }
  }
  getQuantity(productClass: ProductClass) {
    return this.products[productClass.name as ProductsTypes].product.quantity;
  }

  purchace(ProductsType: ProductsTypes, quantity: number): boolean {
    if (this.products[ProductsType].product.quantity >= quantity) {
      this.products[ProductsType].product.quantity -= quantity;
      return true;
    } else {
      return false;
    }
  }
}

export { Inventory };
