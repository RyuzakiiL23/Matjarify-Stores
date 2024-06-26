"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface LogInDialogState {
  logInDialog: string
}
const initialState: LogInDialogState = {
  logInDialog: '',
};

export const LogInDialogSlice = createSlice({
  name: "logInDialog",
  initialState,
  reducers: {
    LogInOpen: (state) => {
      state.logInDialog = 'LogIn';
    },
    SignUpOpen: (state) => {
      state.logInDialog = 'SignUp';
    },
    SignUpClose: (state) => {
      state.logInDialog = '';
    },
  },
});
// Action creators are generated for each case reducer function
export const { SignUpClose, LogInOpen, SignUpOpen } = LogInDialogSlice.actions;
export default LogInDialogSlice.reducer;