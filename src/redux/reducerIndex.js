import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

export default allReducers;
