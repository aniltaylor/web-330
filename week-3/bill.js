// Creating Bill class with four parameters/ menu items.
export class Bill {
  constructor(_beverages, _appetizers, _mainCourses, _desserts) {
    // Each parameter is set to an empty array.
    // Each array will be filled with the value of each menu item.
    this._beverages = [];
    this._appetizers = [];
    this._mainCourses = [];
    this._desserts = [];
  }

  // _beverages = [];
  // _appetizers = [];
  // _mainCourses = [];
  // _desserts = [];

  // creates addBeverage, addAppetizer, addMainCourse, addDessert functions/push each menu item object to relative array.
  addBeverage(beverage) {
    this._beverages.push(beverage);
  }

  addAppetizer(appetizer) {
    this._appetizers.push(appetizer);
  }
  addMainCourse(mainCourse) {
    this._mainCourses.push(mainCourse);
  }
  addDessert(dessert) {
    this._desserts.push(dessert);
  }

  // Creates getTotal function uses forEach() function to loop menu item array/calculate total using price field of each menu item object.
  getTotal() {
    let total = 0;

    this._appetizers.forEach(function (appetizer) {
      total += parseFloat(appetizer.price);
    });
    this._beverages.forEach(function (beverage) {
      total += parseFloat(beverage.price);
    });
    this._mainCourses.forEach(function (mainCourse) {
      total += parseFloat(mainCourse.price);
    });
    this._desserts.forEach(function (dessert) {
      total += parseFloat(dessert.price);
    });

    console.log(`The total is ${total}`);
    // Return total up to the 2nd decimal.
    return total.toFixed(2);
  }
}
