const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === "string") {
        return mealToCheck._meal;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === "number") {
        return priceToCheck._price;
      }
    },
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for $${this._price}!`;
      } else {
        return "Meal or price was not set correctly!";
      }
    },
  };
  
  menu._meal = "Adobo";
  menu._price = 10;
  console.log(menu.todaysSpecial);
  