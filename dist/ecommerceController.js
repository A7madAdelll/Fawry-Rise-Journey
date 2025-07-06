"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ECommerceController = void 0;
const customer_1 = require("./models/custorme/customer");
function convertProductClassToString(productClass) {
    return productClass.name;
}
class ECommerceController {
    constructor(store) {
        this.customers = [];
        this.store = store;
    }
    createCustomer(name, palance) {
        const customer = new customer_1.Customer(name, palance, this.store, this);
        this.customers.push(customer);
        return customer;
    }
    getprice(productClass) {
        return this.store.getPrice(productClass);
    }
    getWeight(productClass) {
        return this.store.getWeight(productClass);
    }
    getCustomerCart(customer) {
        return customer.cart;
    }
    CheckIfCanAddProductToCart(productsType, quantity) {
        if (this.store.getquantity(productsType) < quantity) {
            return false;
        }
        else {
            this.store.buyProduct(convertProductClassToString(productsType), quantity);
            return true;
        }
    }
    checkout(customer) {
        const cart = customer.cart;
        const cartItems = cart.getCartItems();
        let orderSubTotal = 0;
        let shoppingFees = 0;
        let paidAmount = 0;
        for (const key in cartItems) {
            if (customer.palance < cartItems[key].price) {
                throw new Error("Insufficient funds");
            }
            customer.palance -= cartItems[key].price;
            paidAmount += cartItems[key].price;
            orderSubTotal += cartItems[key].price;
            if (cartItems[key].weight) {
                shoppingFees += cartItems[key].weight * this.store.getFeesPerKg();
            }
            console.log(`Ordered ${cartItems[key].quantity} ${key}`);
            console.log(`Subtotal: ${orderSubTotal}`);
            console.log(`Shopping Fees: ${shoppingFees}`);
            console.log(`Paid Amount: ${paidAmount}`);
        }
    }
}
exports.ECommerceController = ECommerceController;
