// Import product class from product.js
import { Product } from "./product";

// Create MainCourse class/export module.
export class MainCourse extends Product {
  constructor(name, price) {
    super(name, price);
  }
}
