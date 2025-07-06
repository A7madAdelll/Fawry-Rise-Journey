"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const invintory_1 = require("./invintory");
class Store {
    constructor(feesOnShipingPerKg) {
        this.feesOnShipingPerKg = 0;
        this.feesOnShipingPerKg = feesOnShipingPerKg;
        this.inventory = new invintory_1.Inventory();
    }
    static getInstance(feesOnShippingPerKg) {
        if (!Store.instance) {
            Store.instance = new Store(feesOnShippingPerKg);
        }
        return Store.instance;
    }
    getFeesPerKg() {
        return this.feesOnShipingPerKg;
    }
    buyProduct(productClass, quantity) {
        if (!this.inventory.purchace(productClass, quantity)) {
            throw new Error(`Not enough ${productClass} in the store`);
        }
    }
    getPrice(productClass) {
        return this.inventory.getprice(productClass);
    }
    getWeight(productClass) {
        return this.inventory.getWeight(productClass);
    }
    getquantity(productClass) {
        return this.inventory.getQuantity(productClass);
    }
}
exports.Store = Store;
