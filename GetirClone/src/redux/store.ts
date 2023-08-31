import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import cartItems from "./reducers/cartItem";
const reducers = combineReducers({
  cartItems: cartItems,
});
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleleware))
);
export default store;
