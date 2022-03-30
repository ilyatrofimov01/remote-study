import { User } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: User = {
  email: "",
  token: "",
  userId: "",
  expirationDate: new Date()
};

const getLocalUser = (): User => {
  const localStringUser = localStorage.getItem("userData");
  if (localStringUser) {
    return JSON.parse(localStringUser);
  }
  return initialState;
};

export const userSlice = createSlice({
  name: "user",
  initialState: getLocalUser(),
  reducers: {
    setUser: (state, action: PayloadAction<User>) => state = { ...state, ...action.payload },
    logOutUser: (state) => initialState
  }
});

export const { setUser, logOutUser } = userSlice.actions;
