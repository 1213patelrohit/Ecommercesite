import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


import userReducer from "./LoginSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  },
});
console.log("object", Store)
export default Store;
