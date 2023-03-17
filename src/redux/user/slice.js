import { createSlice } from '@reduxjs/toolkit';
import { fetchUser, signUpUser, logInUser, logOutUser } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: null,
  // isLoggedIn: false,
  // isRefreshing: false,
};
const handlePending = state => {
  state.isLoading = true;
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [signUpUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logInUser.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOutUser.fulfilled](state) {
      state.user = { name: '', email: '' };
      state.token = null;
      state.isLoggedIn = false;
    },
    // [fetchUser.pending](state) {
    //   state.isRefreshing = true;
    // },
    [fetchUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      // state.isRefreshing = false;
    },
    // [refreshUser.rejected](state) {
    //   state.isRefreshing = false;
    // },
  },
});

// Selectors
export const selectIsLoggedIn = state => state.user.isLoggedIn;

export const selectUser = state => state.user;
