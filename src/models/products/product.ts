abstract class Product {
  public name: string = "";
  public price: number = 0;
  public quantity: number = 0;
  constructor(name: string, price: number, quantity: number) {
    this.price = price;
    this.name = name;
    this.quantity = quantity;
  }
}
export { Product };
