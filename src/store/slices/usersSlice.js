import { createSlice } from '@reduxjs/toolkit';
import { login } from '../thunks/login';
import { verifyUser } from '../thunks/verifyUser';
import { registerUser } from '../thunks/registerUser';
import {getUserbyID} from '../thunks/getUserbyID'
import {ChangePassword} from '../thunks/ChangePassword'
import { resendVerify } from '../thunks/resendVerify';

import {updateUser , updateimage} from '../thunks/updateUser'
const usersSlice = createSlice({
  name: 'Auth',
  initialState: {
    isLoading: false,
    data: [],
    verifydata: [],
    error: null,
  },
  extraReducers(builder) {

    builder.addCase(login.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(verifyUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.verifydata = action.payload;
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(resendVerify.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(resendVerify.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(resendVerify.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(registerUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;

    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(getUserbyID.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUserbyID.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getUserbyID.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });


    builder.addCase(updateimage.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateimage.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(updateimage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(ChangePassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(ChangePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(ChangePassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },

  
});

export const usersReducer = usersSlice.reducer;
