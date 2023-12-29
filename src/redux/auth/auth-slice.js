import { createSlice } from '@reduxjs/toolkit';
import { createNewUser, currentUser, logOut, signIn } from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
};
// const handlePending = state => {
//     state.isLoading = true;
//   };
//   const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
//   };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(currentUser.fulfilled, (state, action)=>{
      state.user = action.payload;
      state.isLoggedIn = true;
    })

    
      .addCase(createNewUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })

      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });

  },
});

export const authReducer = authSlice.reducer;
