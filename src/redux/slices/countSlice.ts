import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount: (state) => {
      state.count = state.count + 1;
    },
    decrementCount: (state) => {
      state.count = state.count - 1;
    },
    resetCount: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementCount, decrementCount, resetCount } =
  counterSlice.actions;
export default counterSlice.reducer;
