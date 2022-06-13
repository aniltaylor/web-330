// Import product class from product.js
import { Product } from "./product";

// Create Dessert class/export module.
export class Dessert extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
