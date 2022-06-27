// Import FoodModel class.
import { FoodModel } from "./food-model.js";

// Created CalorieConverter.
export CalorieConverter {
  // Creates an array for each food object with the static property name data.
  static data = [
    new FoodModel(105, "cake", 278),
    new FoodModel(106, "Apple", 105),
    new FoodModel(107, "Hamburger", 354),
    new FoodModel(108, "cheeseFries", 400),
    new FoodModel(109, "cheeseburger", 405),
    new FoodModel(110, "orange", 100),
  ];

  // Use static property find method to return for array if object.name is included in user input.
  static find(string) {
    return this.data.filter((foodModel) => {
      if (string.includes(foodModel.name.toLowerCase())) {
        return foodModel;
      }
    });
  }
}
