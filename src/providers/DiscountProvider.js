export default class DiscountProvider {
  static get DISCOUNT_FOR_STORE_EMPLOYEES() {
    return 0.3;
  }
  static get DISCOUNT_FOR_AFFILIATE() {
    return 0.1;
  }
  static get DISCOUNT_FOR_PRIVILEGED_CUSTOMER() {
    return 0.05;
  }
  static get RELEVANT_DISCOUNT() {
    return 5;
  }

  static getDiscountAmountFor(user, amount) {
    if (user.belongsToStore()) {
      return amount * this.DISCOUNT_FOR_STORE_EMPLOYEES;
    }
    if (user.isAffiliate()) {
      return amount * this.DISCOUNT_FOR_AFFILIATE;
    }
    if (user.isRegisteredSince2Years()) {
      return amount * this.DISCOUNT_FOR_PRIVILEGED_CUSTOMER;
    }
    return 0;
  }

  static getReletiveDiscountAmount(amount) {
    const reletiveDiscountFactor = Math.floor(amount / 100);
    if (reletiveDiscountFactor >= 1) {
      return reletiveDiscountFactor * this.RELEVANT_DISCOUNT;
    }
    return 0;
  }
}
