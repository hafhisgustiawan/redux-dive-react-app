// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import authSlice from './auth';

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
