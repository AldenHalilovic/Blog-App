import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { login , logout } from "./userServices";


const initialState = {
  user: null,
  error: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user.data;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload?.message;
        state.isLoading = false;
      })
      .addCase(logout, (state) => {
        state.user = null;
      })
      .addCase(PURGE, (state) => {
        state.user = null;
      });
    // .addCase(verifyToken.pending ,state => {
    //     state.isLoading = true;
    //     state.error = null;
    // })
    // .addCase(verifyToken.rejected, (state,action) =>{
    //     state.isLoading = false;
    //     state.error = action.error.message;
    //     state.user= null;
    // })
    // .addCase(verifyToken.fulfilled ,state =>{
    //     state.error = null;
    //     state.isLoading = false;
    // })
  },
});

const { reducer } = userSlice;
export default reducer;
