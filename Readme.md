# Fawry E-Commerce System

This project is a TypeScript-based simulation of an e-commerce system, including products, inventory management, cart operations, and a controller for checking product availability.

## 🛠 Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 📦 Setup

1. **Clone the repository**:

2. **run those lines** 
 ```bash
   git clone https://github.com/A7madAdelll/Fawry-Rise-Journey.git
   cd Fawry-Rise-Journey
   npx ts-node src/demo.ts
   ```

## task 
[Click here to view the task](https://fawry-internship.notion.site/Fawry-Rise-Journey-Challenge-22573781f9438098a901f353c7de2039)


## 💡 My Assumptions

- There can be only **one store**.
- There can be **multiple users** sharing the same store.
- I encountered **ambiguity in product expiry**:
  - If I assume that all items in a given product share the same expiry date, that doesn’t make sense.
  - Also, if some of the product units are expired, the test case uses `cart.add(product, quantity)`, which doesn’t allow the user to select specific units.
  - So I assumed expired items are **automatically excluded**, and the user cannot manually pick between expired and non-expired items.

## uml 
![uml]("https://github.com/A7madAdelll/Fawry-Rise-Journey/blob/main/uml/uml.jpg")


