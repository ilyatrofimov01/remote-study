export interface User {
  email: string,
  token: string
  userId: string,
  expirationDate: Date
}

export enum UserActionTypes {
  SET_USER = "SET_USER",
  LOG_OUT_USER = "LOG_OUT_USER"
}

export interface setUser {
  type: UserActionTypes.SET_USER,
  payload: User
}

export interface logOutUser {
  type: UserActionTypes.LOG_OUT_USER;
}


export type UserActions = setUser | logOutUser