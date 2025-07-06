import { MobleScratchCards } from "../src/models/products/mobile_scratch_cards";
import { Mobile } from "../src/models/products/mobile";
import { Cheese } from "../src/models/products/cheese";
import { Biscuits } from "../src/models/products/biscuits";
import { Tv } from "../src/models/products/tv";

import { ECommerceController } from "./ecommerceController";
import { Store } from "./models/ecommerce/store";
import { Customer } from "./models/customer/customer";
import { Cart } from "./models/cart/cart";

function checkout(customer: Customer, cart: Cart) {
  ecommerceTest.checkout(customer1);
}

const store = Store.getInstance(0.1);
const ecommerceTest = new ECommerceController(store);
const customer1 = ecommerceTest.createCustomer("ahmed", 10000);
const cart1 = ecommerceTest.getCustomerCart(customer1);
console.log("just for refference");
console.log("user balance = ", customer1.balance);
console.log("                     price      quantity      weight");
console.log(`Cheese             =  50          1000              1 kg`);
console.log(`Biscuits           =  10          10               no weight`);
console.log(`TV                 =  1000        1000               5 kg`);
console.log(`Mobile             =  800         10               no weight `);
console.log(`MobleScratchCards  =  5           10               no weight `);

try {
  checkout(customer1, cart1);
} catch (err) {
  if (err instanceof Error) {
    console.log(err.message);
  } else {
    console.log("An unknown error occurred");
  }
}
