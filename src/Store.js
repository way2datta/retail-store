import DiscountProvider from "./providers/DiscountProvider";
import CartValidator from "./validators/cartValidator";

export default class Store {
  calculateNetPayableAmount(cart, user) {
    CartValidator.validateCart(cart);

    const netPayableForGroceryItems = cart.getNetPayableForGroceryItems();
    const netPayableForOtherItems = cart.getNetPayableForOtherItems(user);
    let totalAmountAfterPercentageDiscount = netPayableForOtherItems + netPayableForGroceryItems;
    const reletiveDiscountAmount = DiscountProvider.getReletiveDiscountAmount(totalAmountAfterPercentageDiscount);
    const netPayableAmount = totalAmountAfterPercentageDiscount - reletiveDiscountAmount;

    return netPayableAmount;
  }
}
