// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

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
      state.counter += action.payload; // payload ini default namanya
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});

const authSlice = createSlice({
  name: 'authentication',
  initialState: { authenticated: localStorage.getItem('isLoggedIn') === '1' },
  // in this function, you can mutate state
  reducers: {
    login: (state) => {
      localStorage.setItem('isLoggedIn', '1');
      state.authenticated = true;
    },
    logout: (state) => {
      localStorage.removeItem('isLoggedIn');
      state.authenticated = false;
    },
  },
});

export const { increment, decrement, increase, toggleCounter } =
  counterSlice.actions;

export const { login, logout } = authSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;

// const reducer = (state = initialState, action) => {
//   // this return will not merge state, this is will overwrite existing state
//   // NEVER MUTATE EXISTING STATE, contoh: state.counter++

//   if (action.type === 'increment') {
//     return { ...state, counter: state.counter + 1 };
//   }

//   if (action.type === 'increase') {
//     return { ...state, counter: state.counter + action.amount };
//   }

//   if (action.type === 'decrement') {
//     return { ...state, counter: state.counter - 1 };
//   }

//   if (action.type === 'toggle') {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(reducer);

// export default store;
