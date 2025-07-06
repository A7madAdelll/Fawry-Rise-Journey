import { MobleScratchCards } from "../src/models/products/mobile_scratch_cards";
import { Mobile } from "../src/models/products/mobile";
import { Cheese } from "../src/models/products/cheese";
import { Biscuits } from "../src/models/products/biscuits";
import { Tv } from "../src/models/products/tv";

import { ECommerceController } from "./ecommerceController";
import { Store } from "./models/ecommerce/store";
import { Customer } from "./models/custorme/customer";
import { Cart } from "./models/cart/cart";

function checkout(customer: Customer, cart: Cart) {
  ecommerceTest.checkout(customer1);
}

const store = Store.getInstance(0.1);
const ecommerceTest = new ECommerceController(store);
const customer1 = ecommerceTest.createCustomer("ahmed", 1100000);
const cart1 = ecommerceTest.getCustomerCart(customer1);

cart1.add(Cheese, 2);
// cart1.add(Tv, 3);
// cart1.add(MobleScratchCards, 1);
checkout(customer1, cart1);
