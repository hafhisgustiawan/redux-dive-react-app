import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0, showCounter: true },
  // in this function, you can mutate state
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter += action.payload; // payload ini default namanya, isinya bisa aja array atau object, cara gunakannya cek component/Counter.js
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice;
