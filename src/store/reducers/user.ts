import { UserActions, UserState, UserActionTypes } from "../../types/user";

const initialState: UserState = {
  userToken: "",
  email: "",
  id: "",
  tokenExpirationDate: ""
}
export const user = (state: UserState = initialState, action : UserActions) =>{
  switch (action.type){
    default: return {...state}
  }

}