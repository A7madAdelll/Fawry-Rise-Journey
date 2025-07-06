import { Customer } from "./models/customer/customer";
import { Store } from "./models/ecommerce/store";
import { Biscuits } from "./models/products/biscuits";
import { Cheese } from "./models/products/cheese";
import { Mobile } from "./models/products/mobile";
import { MobleScratchCards } from "./models/products/mobile_scratch_cards";
import { Tv } from "./models/products/tv";

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

class ECommerceController {
  private store: Store;

  private customers: Customer[] = [];
  constructor(store: Store) {
    this.store = store;
  }
  createCustomer(name: string, balance: number) {
    const customer = new Customer(name, balance, this.store, this);
    this.customers.push(customer);
    return customer;
  }
  getprice(productClass: ProductClass) {
    return this.store.getPrice(productClass);
  }
  getWeight(productClass: ProductClass) {
    return this.store.getWeight(productClass);
  }

  getCustomerCart(customer: Customer) {
    return customer.cart;
  }

  CheckIfCanAddProductToCart(
    productsType: ProductClass,
    quantity: number
  ): boolean {
    if (this.store.getquantity(productsType) < quantity) {
      return false;
    } else {
      this.store.buyProduct(
        convertProductClassToString(productsType),
        quantity
      );

      return true;
    }
  }

  checkout(customer: Customer) {
    const reciptShipment = [];
    const recipt = [];
    const reciptTotal = [];

    const cart = customer.cart;
    if (Object.keys(cart.getCartItems()).length === 0)
      throw new Error("Cart is empty");
    const cartItems = cart.getCartItems();
    let orderSubTotal = 0;
    let shippingFees = 0;
    let paidAmount = 0;
    let shippingWeight = 0;
    reciptShipment.push("- * Shipment notice **");
    recipt.push("- * Checkout receipt **");

    for (const key in cartItems) {
      if (customer.balance < cartItems[key].price) {
        throw new Error("Insufficient funds");
      }
      customer.balance -= cartItems[key].price;
      paidAmount += cartItems[key].price;
      orderSubTotal += cartItems[key].price;
      if (cartItems[key].weight) {
        shippingWeight += cartItems[key].weight;
        shippingFees += cartItems[key].weight * this.store.getFeesPerKg();
        reciptShipment.push(
          `${cartItems[key].quantity}x ${key}         ${cartItems[key].weight}kg`
        );
      }
      recipt.push(
        `${cartItems[key].quantity}x ${key}         ${cartItems[key].price}$`
      );
    }
    reciptTotal.push(`Subtotal:      ${orderSubTotal}$`);
    reciptTotal.push(`Shipping:      ${shippingFees}$`);
    reciptTotal.push(`amount:        ${paidAmount}$`);

    reciptShipment.push(`Total package weight ${shippingWeight}kg`);
    console.log("\n\n");
    console.log(
      reciptShipment.join("\n\n"),
      "\n\n",
      recipt.join("\n\n"),
      "\n\n",
      ".....................\n\n",
      reciptTotal.join("\n\n"),
      "\n\n",
      `Balance: ${customer.balance} $`
    );
  }
}
export { ECommerceController };
