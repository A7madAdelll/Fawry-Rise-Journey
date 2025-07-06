"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tv_1 = require("../src/models/products/tv");
const ecommerceController_1 = require("./ecommerceController");
const store_1 = require("./models/ecommerce/store");
function checkout(customer, cart) {
    ecommerceTest.checkout(customer1);
}
const store = store_1.Store.getInstance(0.1);
const ecommerceTest = new ecommerceController_1.ECommerceController(store);
const customer1 = ecommerceTest.createCustomer("ahmed", 1100);
const cart1 = ecommerceTest.getCustomerCart(customer1);
cart1.add(tv_1.Tv, 2);
checkout(customer1, cart1);
