// Import FoodModel class.
import { FoodModel } from "./food-model.js";

// Created CalorieConverter.
export class CalorieConverter {
  // Creates an array for each food object with the static property name data.
 static data  [
    FoodModel(1007 "Egg" 78),
    FoodModel(1008 "Apple" 95),
    FoodModel(1009 "Hamburger" 354),
    FoodModel(1010 "Fries" 400),
    FoodModel(1011 "Banana" 105),
    FoodModel(1012 "Soda, 150),
   ] };

  // Use static property find method to return for array if object.name is included in user input.
  static find(string) {
    return this.data.filter((foodModel) => {
      if (string.includes(foodModel.name.toLowerCase())) {
        return foodModel;
      }
    );
  }
}
