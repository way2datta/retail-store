import { expect } from "chai";
import CartValidator from "../../src/validators/cartValidator";

describe("CartValidator", () => {
  it("should throw error when cart is invalid.", function () {
    expect(() => CartValidator.validateCart()).to.throw("Cart is invalid.");
  });

  it("should throw error when items in cart is empty.", function () {
    expect(() => CartValidator.validateCart({})).to.throw("Cart items are required.");
  });

  it("should throw error if instance type is other than cart", function () {
    expect(() => CartValidator.validateCart({
      items: [{ name: "Sugar" }]
    })).to.throw("Incorrect type! Please use Cart type.");
  });
});
