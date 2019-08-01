import moment from "moment";

export default class User {
  static ROLE_STORE_OPERATOR() {
    return "store operator";
  }
  static ROLE_AFFILIATE() {
    return "affiliate";
  }
  static ROLE_CUSTOMER() {
    return "customer";
  }

  constructor(name, role, registrationDate) {
    this.name = name;
    this.role = role;
    this.registrationDate = registrationDate;
  }

  belongsToStore() {
    return this.role === User.ROLE_STORE_OPERATOR;
  }

  isAffiliate() {
    return this.role === User.ROLE_AFFILIATE;
  }

  isRegisteredSince2Years() {
    var now = moment(new Date());
    var registrationDate = moment(this.registrationDate);
    var yearsSinceRegistered = now.diff(registrationDate, "years", true);
    return yearsSinceRegistered >= 2;
  }
}
