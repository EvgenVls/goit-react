import { createStore } from "redux";

export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

export const withdraw = (value) => {
  return {
    type: "balance/withdraw",
    payload: value,
  };
};

const initialState = {
  balance: {
    value: 0,
  },
  locale: {
    lang: "uk",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        ...state,
        balance: {
          value: state.balance.value + action.payload,
        },
      };
    case "balance/withdraw":
      return {
        ...state,
        balance: {
          value: state.balance.value - action.payload,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer);
