export enum UserActionTypes {
  FETCH_USER = "FETCH_USER"
}
export interface UserState {
  userToken: string,
  email: string,
  id:string,
  tokenExpirationDate: string
}

interface fetchUser {
   type: UserActionTypes.FETCH_USER
}
export type UserActions = fetchUser
