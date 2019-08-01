import Cart from "../models/Cart";

export default class CartValidator{
  static validateCart(cart) {
    if (!cart) {
      throw new Error("Cart is invalid.");
    }
    if (!cart.items) {
      throw new Error("Cart items are required.");
    }
    if (!(cart instanceof Cart)) {
      throw new Error("Incorrect type! Please use Cart type.");
    }
  }
}
