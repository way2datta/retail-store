export default class Item {
  constructor({ name, quantity, pricePerUnit, category }) {
    this.name = name;
    this.quantity = quantity;
    this.category = category;
    this.pricePerUnit = pricePerUnit;
  }

  belongsToGrocery() {
    return this.category === "grocery";
  }
}
