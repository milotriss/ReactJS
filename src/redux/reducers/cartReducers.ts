import { Carts } from "../../data/data";

const initState: any[] = [];

interface Action {
  type: string;
  payload: any;
}

const cartReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case "ADD_CART":
      let checkCart = state.find(
        (item: Carts) => item.id === action.payload.id
      );
      if (checkCart) {
        state = state.map((item: Carts) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
      } else {
        state = [...state, { ...action.payload, quantity: 1 }];
      }
      break;
    case "REMOVE_CART":
      let checkCart2 = state.find(
        (item: Carts) => item.id === action.payload.id
      );
      if (checkCart2) {
        state = state.map((item: Carts) => {
          return item.id === action.payload.id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
      }
      break;
    case "ON_MINUS":
      state = state.map((item: Carts) => {
        return item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
      break;
    case "ON_PLUS":
      state = state.map((item: Carts) => {
        return item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
      break;
    case "DELETE_CART":
      state = state.filter((item: Carts) => item.id !== action.payload);
      break;
    case "PAYMENT":
        state = []
      break;
  }
  return state;
};
export default cartReducer;
