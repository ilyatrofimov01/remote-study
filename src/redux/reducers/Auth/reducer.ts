import { Auth } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Auth = {
  authenticated: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => state = { ...state, authenticated: action.payload }
  }
});

export const { setAuthenticated } = authSlice.actions;