import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "0",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    clearValue: (state) => {
      return { ...state, value: "0" };
    },

    addOperators: (state, action) => {
      return { ...state, value: state.value + " " + action.payload + " " };
    },

    addDecimal: (state, action) => {
      const array = state.value.split(" ");
      const lastElement = array[array.length - 1];
      if (!lastElement.includes(action.payload)) {
        return { ...state, value: state.value + action.payload };
      }
    },

    addResult: (state) => {
      return { ...state, value: eval(state.value) };
    },

    addNumbers: (state, action) => {
      return {
        ...state,
        value:
          state.value === "0" ? action.payload : state.value + action.payload,
      };
    },
  },
});

export const { clearValue, addOperators, addDecimal, addResult, addNumbers } =
  calculatorSlice.actions;
export default calculatorSlice.reducer;
