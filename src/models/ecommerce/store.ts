import { Biscuits } from "../products/biscuits";
import { Cheese } from "../products/cheese";
import { Mobile } from "../products/mobile";
import { MobleScratchCards } from "../products/mobile_scratch_cards";
import { Tv } from "../products/tv";
import { Product } from "../products/product";
import { Inventory } from "./invintory";
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

class Store {
  private static instance: Store;
  private inventory: Inventory;
  private feesOnShipingPerKg = 0;
  private constructor(feesOnShipingPerKg: number) {
    this.feesOnShipingPerKg = feesOnShipingPerKg;
    this.inventory = new Inventory();
  }
  public static getInstance(feesOnShippingPerKg: number): Store {
    if (!Store.instance) {
      Store.instance = new Store(feesOnShippingPerKg);
    }
    return Store.instance;
  }

  getFeesPerKg() {
    return this.feesOnShipingPerKg;
  }
  buyProduct(productClass: ProductsTypes, quantity: number): void {
    if (!this.inventory.purchace(productClass, quantity)) {
      throw new Error(`Not enough ${productClass} in the store`);
    }
  }

  getPrice(productClass: ProductClass) {
    return this.inventory.getprice(productClass);
  }
  getWeight(productClass: ProductClass) {
    return this.inventory.getWeight(productClass);
  }
  getquantity(productClass: ProductClass) {
    return this.inventory.getQuantity(productClass);
  }
}

export { Store };
