import Cart from "./../../src/models/Cart";
import { expect } from "chai";
import Item from "./../../src/models/Item";

describe("Cart", () => {
  it("should return total amount for grocery items", () => {
    const sugar = new Item({
      name: "sugar", pricePerUnit: 10,
      category: "grocery", quantity: 3
    });
    const sofa = new Item({
      name: "sofa", pricePerUnit: 100,
      category: "other", quantity: 1
    });
    const cart = new Cart([sugar, sofa]);
    const sum = cart.getNetPayableForGroceryItems();
    expect(sum).to.be.equal(30);
  });

  it("should return total amount for items from other category", () => {
    const sugar = new Item({
      name: "sugar", pricePerUnit: 10,
      category: "grocery", quantity: 3
    });
    const sofa = new Item({
      name: "sofa", pricePerUnit: 100,
      category: "other", quantity: 1
    });
    const cart = new Cart([sugar, sofa]);
    const sum = cart.getTotalAmountForItemsOtherThanGrocery();
    expect(sum).to.be.equal(100);
  });

  it("should return total amount for given items", () => {
    const sugar = new Item({
      name: "sugar", pricePerUnit: 10,
      category: "grocery", quantity: 3
    });
    const sofa = new Item({
      name: "sofa", pricePerUnit: 100,
      category: "other", quantity: 1
    });
    const cart = new Cart([sugar, sofa]);
    const sum = cart.getTotalAmount(cart.items);
    expect(sum).to.be.equal(130);
  });
});
