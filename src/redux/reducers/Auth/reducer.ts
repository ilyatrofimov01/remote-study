import { Auth } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../User/types";

const initialState: Auth = {
  authenticated: false
};

const getInitialFromLocal = (): Auth => {

  const localStringUser = localStorage.getItem("userData");
  if (localStringUser) {
    const userData: User = JSON.parse(localStringUser);
    if (userData.expirationDate) {
      const expirationDuration = new Date(userData.expirationDate).getTime() - new Date().getTime();
      if (expirationDuration > 0) {
        return { authenticated: true };
      }
    }
  }
  return initialState;
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getInitialFromLocal(),
  reducers: {
    setAuthenticated: (state, action: PayloadAction<boolean>) => state = { ...state, authenticated: action.payload }
  }
});

export const { setAuthenticated } = authSlice.actions;