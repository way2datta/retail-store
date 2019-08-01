import { expect } from "chai";
import Store from "./../src/Store";
import Cart from "./../src/models/Cart";
import User from "./../src/models/User";
import Item from "./../src/models/Item";

describe("Store", function () {
  let store;
  beforeEach(function () {
    store = new Store();
  });

  describe("Cart validation", () => {
    it("should throw error when cart is invalid.", function () {
      expect(store.calculateNetPayableAmount).to.throw("Cart is invalid.");
    });

    it("should throw error when items in cart is empty.", function () {
      expect(() => store.calculateNetPayableAmount({})).to.throw("Cart items are required.");
    });
  });

  it("should calculate total price for new customer.", function () {
    // Arrange
    const sugar = new Item({
      name: "sugar", pricePerUnit: 10,
      category: "grocery", quantity: 2
    });
    const cart = new Cart([sugar]);
    const user = new User("Jim", User.ROLE_CUSTOMER, new Date());

    // Act
    const totalPrice = store.calculateNetPayableAmount(cart, user);

    // Assert
    expect(totalPrice).to.be.equal(20);
  });

  it("should apply 30% discount on purchase for store employees.", function () {
    // Arrange
    const sofa = new Item({
      name: "sofa", pricePerUnit: 100,
      category: "other", quantity: 1
    });
    const cart = new Cart([sofa]);
    const user = new User("Harry", User.ROLE_STORE_OPERATOR, new Date());

    // Act
    const totalPrice = store.calculateNetPayableAmount(cart, user);

    // Assert
    expect(totalPrice).to.be.equal(70);
  });

  it("should apply 10% discount on purchase for affiliates.", function () {
    // Arrange
    const sofa = new Item({
      name: "sofa", pricePerUnit: 100,
      category: "other", quantity: 1
    });
    const cart = new Cart([sofa]);
    const user = new User("Harry", User.ROLE_AFFILIATE, new Date());

    // Act
    const totalPrice = store.calculateNetPayableAmount(cart, user);

    // Assert
    expect(totalPrice).to.be.equal(90);
  });

  it("should apply 5% discount for customers that registered at least 2 years ago.", function () {
    // Arrange
    const sofa = new Item({
      name: "sofa", pricePerUnit: 100,
      category: "other", quantity: 1
    });
    const cart = new Cart([sofa]);
    const user = new User("Jim", User.ROLE_CUSTOMER, new Date(2017, 1, 30));

    // Act
    const totalPrice = store.calculateNetPayableAmount(cart, user);

    // Assert
    expect(totalPrice).to.be.equal(95);
  });

  it("should not apply percentage discount if item belongs to grocery.", function () {
    // Arrange
    const sugar = new Item({
      name: "sugar", pricePerUnit: 10,
      category: "grocery", quantity: 5
    });
    const cart = new Cart([sugar]);
    const user = new User("Harry", User.ROLE_STORE_OPERATOR, new Date());

    // Act
    const totalPrice = store.calculateNetPayableAmount(cart, user);

    // Assert
    expect(totalPrice).to.be.equal(50);
  });

  it("should apply relative discount on purchase that is multiple of 100.", function () {
    // Arrange
    const user = new User("Harry", User.ROLE_STORE_OPERATOR, new Date());
    const sugar = new Item({
      name: "sugar", pricePerUnit: 10,
      category: "grocery", quantity: 10
    });
    const sofa = new Item({
      name: "sofa", pricePerUnit: 100,
      category: "other", quantity: 1
    });
    const cart = new Cart([sugar, sofa]);
    // Act
    const totalPrice = store.calculateNetPayableAmount(cart, user);
    
    // Assert
    expect(totalPrice).to.be.equal(165);
  });
});
