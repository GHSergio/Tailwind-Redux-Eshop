// src/store.ts
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"; // 用于开发者工具

// 导入你的reducers
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

// 合并所有的reducers
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  // 其他reducers
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
