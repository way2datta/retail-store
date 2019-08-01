import User from "./../../src/models/User";
import { expect } from "chai";

describe("UserModel", () => {
  describe("belongsToStore", () => {
    it("should return true if user is employed by store", () => {
      const newUser = new User("Harry", User.ROLE_STORE_OPERATOR, new Date());
      expect(newUser.belongsToStore()).to.be.true;
    });

    it("should return false if user is not employed by store", () => {
      const newUser = new User("Harry", User.ROLE_CUSTOMER, new Date());
      expect(newUser.belongsToStore()).to.be.false;
    });
  });

  describe("isAffiliate", () => {
    it("should return true if user is affiliate", () => {
      const newUser = new User("Harry", User.ROLE_AFFILIATE, new Date());
      expect(newUser.isAffiliate()).to.be.true;
    });

    it("should return false if user is not affiliate", () => {
      const newUser = new User("Harry", User.ROLE_CUSTOMER, new Date());
      expect(newUser.isAffiliate()).to.be.false;
    });
  });
  describe("isRegisteredSince2Years", () => {
    it("should return true if user was registered with store since 2 years", () => {
      const newUser = new User("Jim", User.ROLE_CUSTOMER, new Date(2017, 1, 30));
      expect(newUser.isRegisteredSince2Years()).to.be.true;
    });

    it("should return false if user was registered with store since 2 years", () => {
      const newUser = new User("Jim", User.ROLE_CUSTOMER, new Date());
      expect(newUser.isRegisteredSince2Years()).to.be.false;
    });
  });
});
