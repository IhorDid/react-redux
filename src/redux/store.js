import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

// export const deposit = {
// накладна
//   type: "balance/deposit",
// груз
//   payload: 10,
// };

export const deposit = (value) => {
  return {
    type: "balance/deposit",
    payload: value,
  };
};

const initialState = {
  balance: {
    value: 5,
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "balance/deposit":
      return {
        //   ...state (if any and one because in future add)
        balance: {
          // ...state.balance (if any and one because in future add )
          value: state.balance.value + action.payload,
        },
      };
    default:
      return state;
  }
};

export const store = createStore(rootReducer, devToolsEnhancer());
