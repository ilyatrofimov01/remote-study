import { apiKey, AuthUrls } from "./authUrlTools";
import axios from "axios";
import { User } from "../../redux/reducers/User/types";

export interface AuthFields {
  email: string,
  password: string
}

interface AuthResponse {
  displayName: string,
  email: string,
  expiresIn: string,
  idToken: string,
  kind: string,
  localId: string,
  refreshToken: string,
  registered?: boolean
}

const AuthHandler = (userData: AuthResponse) => {
  const expirationDate = new Date(new Date().getTime() + parseInt(userData.expiresIn) * 1000);
  const newUser: User = {
    email: userData.email,
    token: userData.idToken,
    userId: userData.localId,
    expirationDate
  };
  localStorage.setItem("userData", JSON.stringify(newUser));
  return newUser;
};

export const AuthService = {

  register: async ({ email, password }: AuthFields) => {
    return axios.post(`${AuthUrls.signUp}?key=${apiKey}`, { email, password, returnSecureToken: true })
      .then((res) => AuthHandler(res.data)).catch((error) => errorHandler(error.response.data.error.message));
  },
  login: async ({ email, password }: AuthFields) => {
    return axios.post(`${AuthUrls.signIn}?key=${apiKey}`, { email, password, returnSecureToken: true })
      .then((res) => AuthHandler(res.data)).catch((error) => errorHandler(error.response.data.error.message));
  },
  logout: () => {
    localStorage.removeItem("userData");
  }

};

const errorHandler = (resErrorMessage: String) => {
  let errorMessage: string;

  switch (resErrorMessage) {
    case "EMAIL_EXISTS":
      errorMessage = "The email address is already in use by another account.";
      break;
    case "OPERATION_NOT_ALLOWED":
      errorMessage = "Password sign-in is disabled for this project.";
      break;
    case "TOO_MANY_ATTEMPTS_TRY_LATER":
      errorMessage = "We have blocked all requests from this device due to unusual activity. Try again later.";
      break;
    case "EMAIL_NOT_FOUND":
      errorMessage = "There is no user record corresponding to this identifier. The user may have been deleted.";
      break;
    case "INVALID_PASSWORD":
      errorMessage = "The password is invalid or the user does not have a password.";
      break;
    case "USER_DISABLED":
      errorMessage = "The user account has been disabled by an administrator.";
      break;
    default :
      errorMessage = "An unknown Error";
  }
  throw new Error(errorMessage);
};
