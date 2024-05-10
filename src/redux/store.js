import { createStore, combineReducers } from "redux";
import { balanceReducer } from "./balanceSlice";
import { langReducer } from "./langSlice";

// const initialState = {
//   balance: {
//     value: 1000,
//   },
//   locale: {
//     lang: "uk",
//   },
// };

const rootReducer = combineReducers({
  balance: balanceReducer,
  locale: langReducer,
});

export const store = createStore(rootReducer);
