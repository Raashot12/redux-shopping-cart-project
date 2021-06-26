import { DECREMENT, INCREMENT, CLEAR_CART, REMOVE, GET_TOTALS } from "./Action";
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

    case INCREMENT:
      let tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount + 1 };
          console.log(cartItem);
        }
        return cartItem;
      });
      return { ...state, cart: tempCart };

    case DECREMENT:
      let tempCartDec = [];
      if (action.payload.amount === 1) {
        tempCartDec = state.cart.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
      } else {
        tempCartDec = state.cart.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return (cartItem = { ...cartItem, amount: cartItem.amount - 1 });
          }
          return cartItem;
        });
      }
      return { ...state, cart: tempCartDec };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((cartremove) => {
          return cartremove.id !== action.payload.id;
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

// if statement for reducer action
// function reducer(state, action) {
//   if {action.type === CLEAR_CART } {
//     return {...state, cart: []}
//   }
//   return state
// }

// let tempCar = [];

// if (action.payload.amount === 1) {
//   tempCar = state.cart.filter(
//     (cartItem) => cartItem.id !== action.payload.id
//   );
// } else {
//   tempCar = state.cart.map((cartItem) => {
//     if (cartItem.id === action.payload.id) {
//       cartItem = { ...cartItem, amount: cartItem.amount - 1 };
//     }
//     return cartItem;
//   });
// }
// return { ...state, cart: tempCar };

// var obj = {
//   name: { firstName: "P", lastName: "Sherman" },
//   age: 25,
//   address: { number: 42, street: "Wallaby Way", city: "Sydney" },
// };

// var keysArray = function (obj) {
//   var results = [];
//   for (var key in obj) {
//     if (typeof obj[key] !== Object) {
//       results.push(key);
//     } else {
//       return keysArray(obj[key]);
//     }
//   }
//   return results;
// };
// keysArray(obj);

// chooseCoffee(function (order) {
//   placeOrder(
//     order,
//     function (coffee) {
//       drinkCoffee(coffee);
//     },
//     failureCallback
//   );
// }, failureCallback);

// let example = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("No issue at the moment");
//   }, 2000);
// });

// const response = example.then((response) => console.log(response));
// console.log(response);

// let a = [1, 2, 3, 4, 5, 6];
// function doSomething() {
//   let ab = a.map((aa) => {
//     if (aa > 2) {
//       return 20000;
//     }
//     return 100;
//   });
//   return ab;
// }
// doSomething()
