import DiscountProvider from "./../providers/DiscountProvider";

export default class Cart {
  constructor(items) {
    this.items = items;
  }

  getNetPayableForGroceryItems() {
    const groceryItems = this.items.filter(x => x.belongsToGrocery());
    let totalAmountForGroceryItems = this.getTotalAmount(groceryItems);
    return totalAmountForGroceryItems;
  }

  getTotalAmount(items) {
    let totalAmount = 0;
    for (const { quantity, pricePerUnit } of items) {
      const totalAmountPerItem = quantity * pricePerUnit;
      totalAmount += totalAmountPerItem;
    }
    return totalAmount;
  }

  getTotalAmountForItemsOtherThanGrocery() {
    const otherItems = this.items.filter(x => !x.belongsToGrocery());
    let totalAmountForOtherItems = this.getTotalAmount(otherItems);
    return totalAmountForOtherItems;
  }

  getNetPayableForOtherItems(user) {
    let totalAmountForOtherItems = this.getTotalAmountForItemsOtherThanGrocery();

    const discountAmountForOtherItems = DiscountProvider.getDiscountAmountFor(user,
      totalAmountForOtherItems);

    const netPayableForOtherItems = totalAmountForOtherItems - discountAmountForOtherItems;
    return netPayableForOtherItems;
  }
}
