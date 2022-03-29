import { User, UserActions, UserActionTypes } from "./types";


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
// should remove any action but it bakes configure store
export const userReducer = (state: User = getLocalUser(), action: UserActions): User => {
  switch (action.type) {
    case UserActionTypes.SET_USER :
      return { ...action.payload, ...state };
    case UserActionTypes.LOG_OUT_USER:
      return initialState;
    default:
      return state;
  }
};