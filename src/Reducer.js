import { CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from "./Action";
import cartItems from "./cart-items";
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};
function reducer(state = initialStore, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartremove) => {
          return cartremove.id !== action.payload.id;
        }),
      };
    case TOGGLE_AMOUNT:
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            if (action.payload.toggle === "inc") {
              console.log("It is increasing");
              return (cartItem = { ...cartItem, amount: cartItem.amount + 1 });
            }
            if (action.payload.toggle === "dec") {
              console.log("It is decreasing");
              return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
            }
          }
          return cartItem;
        }),
      };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    default:
      return state;
  }
}
export default reducer;
