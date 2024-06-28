"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface LogInDialogState {
  authState: boolean;
}
const initialState: LogInDialogState = {
  authState: false,
};

export const AuthSlice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    AuthenticatedState: (state) => {
      state.authState = true;
    },
    NotAuthenticatedState: (state) => {
      state.authState = false;
    },
  },
});
// Action creators are generated for each case reducer function
export const { AuthenticatedState, NotAuthenticatedState} = AuthSlice.actions;
export default AuthSlice.reducer;