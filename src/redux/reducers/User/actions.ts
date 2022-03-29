import { User, UserActionTypes } from "./types";

export const setUser = (userData: User) => {
  return {
    type: UserActionTypes.SET_USER,
    payload: userData
  };
};
export const logOutUser = () => {
  return {
    type: UserActionTypes.LOG_OUT_USER
  };
};