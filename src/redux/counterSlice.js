import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    name: "mg mg",
  },
  reducers: {
    testing: (state, actions) => {
      console.log(actions);
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increase10: (state, {payload}) => {
        state.count += payload
    },
    changeName: (state, {payload}) => {
        state.name = payload
    }
  },
});

export const { testing, increment, decrement, reset, increase10, changeName } =
  counterSlice.actions;

export default counterSlice.reducer;