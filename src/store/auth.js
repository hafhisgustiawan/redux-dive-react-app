import { createSlice } from '@reduxjs/toolkit';

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

export default authSlice;
