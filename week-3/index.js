// Create and export product class with name and price parameters.
export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// Export all of the files from index.js file to limit layer issues.
export * from "./appetizer.js";
export * from "./beverage.js";
export * from "./dessert.js";
export * from "./main-course.js";
export * from "./bill.js";
