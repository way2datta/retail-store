import { expect } from "chai";
import DiscountProvider from "./../../src/providers/DiscountProvider";
import User from "./../../src/models/User";

describe("DiscountProvider", () => {
  describe("PercentageDiscount", () => {
    it("should get 30% discount when customer is store employee", () => {
      // Arrange
      const storeEmployee = new User("Jim", User.ROLE_STORE_OPERATOR, new Date());
      const totalAmount = 960;

      // Act
      const discountAmount = DiscountProvider.getDiscountAmountFor(storeEmployee, totalAmount);

      // Assert
      expect(discountAmount).to.be.equal(288);
    });

    it("should get 10% discount when customer is store affiliate", () => {
      // Arrange
      const affiliate = new User("Jim", User.ROLE_AFFILIATE, new Date());
      const totalAmount = 630;

      // Act
      const discountAmount = DiscountProvider.getDiscountAmountFor(affiliate, totalAmount);

      // Assert
      expect(discountAmount).to.be.equal(63);


    });
    it("should get 5% discount when customer is registered couple of years ago", () => {
      // Arrange
      const customer = new User("Jim", User.ROLE_CUSTOMER, new Date(2017, 1, 30));
      const totalAmount = 80;

      // Act
      const discountAmount = DiscountProvider.getDiscountAmountFor(customer, totalAmount);

      // Assert
      expect(discountAmount).to.be.equal(4);
    });
  });
  describe("ReletiveDiscount", () => {
    it("should get reletive discount on total amount more than $100 ", () => {
      // Arrange
      const totalAmount = 292;

      // Act
      const discountAmount = DiscountProvider.getReletiveDiscountAmount(totalAmount);

      // Assert
      expect(discountAmount).to.be.equal(10);
    });

    it("should not get reletive discount on total amount lesser than $100 ", () => {
      // Arrange
      const totalAmount = 99;

      // Act
      const discountAmount = DiscountProvider.getReletiveDiscountAmount(totalAmount);

      // Assert
      expect(discountAmount).to.be.equal(0);
    });
  });
});
