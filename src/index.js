import Store from "./Store";
import Cart from "./models/Cart";
import User from "./models/User";
import Item from "./models/Item";


const store = new Store();

const user = new User("Jim", User.ROLE_CUSTOMER, new Date(2017, 1, 30));
const sugar = new Item({
  name: "sugar", pricePerUnit: 10,
  category: "grocery", quantity: 10
});

const sofa = new Item({ name: "sofa", pricePerUnit: 100, quantity: 1 });
const cart = new Cart([sugar, sofa]);

const netPayableAmount = store.calculateNetPayableAmount(cart, user);

console.log(netPayableAmount);
