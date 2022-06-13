// Import product class from product.js
import { Product } from "./product";

// Create Appetizer class/ export module
export class Appetizer extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
