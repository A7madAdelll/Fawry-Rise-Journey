"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
const biscuits_1 = require("../products/biscuits");
const cheese_1 = require("../products/cheese");
const mobile_1 = require("../products/mobile");
const mobile_scratch_cards_1 = require("../products/mobile_scratch_cards");
const tv_1 = require("../products/tv");
class Inventory {
    constructor() {
        this.feesOnShipingPerKg = 0.5;
        this.products = {
            Biscuits: {
                product: new biscuits_1.Biscuits(10, new Date("2022-01-01"), 10),
            },
            Cheese: {
                product: new cheese_1.Cheese(50, 1, new Date("2022-01-01"), 1000),
            },
            Tv: {
                product: new tv_1.Tv(1000, 1, 1000),
            },
            Mobile: {
                product: new mobile_1.Mobile(800, 10),
            },
            MobleScratchCards: {
                product: new mobile_scratch_cards_1.MobleScratchCards(5, 10),
            },
        };
    }
    getprice(productClass) {
        return this.products[productClass.name].product.price;
    }
    getWeight(productClass) {
        if ("weight" in this.products[productClass.name].product)
            return this.products[productClass.name].product
                .weight;
        else {
            return 0;
        }
    }
    getQuantity(productClass) {
        return this.products[productClass.name].product.quantity;
    }
    getFeesPerKg() {
        return this.feesOnShipingPerKg;
    }
    purchace(ProductsType, quantity) {
        if (this.products[ProductsType].product.quantity >= quantity) {
            this.products[ProductsType].product.quantity -= quantity;
            return true;
        }
        else {
            return false;
        }
    }
}
exports.Inventory = Inventory;
