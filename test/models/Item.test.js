import Item from "./../../src/models/Item";
import { expect } from "chai";

describe("ItemModel", () => {
  it("should return true if item belongs to grocery.", () => {
    const item = new Item({
      name: "sugar",
      pricePerUnit: 10,
      category: "grocery"
    });

    const doesItemBelongsToGrocery = item.belongsToGrocery();

    expect(doesItemBelongsToGrocery).to.be.true;
  });

  it("should return false if item does not belongs to grocery.", () => {
    const item = new Item({
      name: "sugar",
      pricePerUnit: 10,
      category: "other"
    });

    const doesItemBelongsToGrocery = item.belongsToGrocery();

    expect(doesItemBelongsToGrocery).to.be.false;
  });
});
