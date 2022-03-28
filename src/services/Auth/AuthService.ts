import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";

export interface AuthFields {
  email: string,
  password: string
}

export const AuthService = {
  register: async ({email, password}: AuthFields) => {
    try {
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log("something went wrong with register", err);
    }
  },
  login: async () => {

  },
  logout: async () => {
  }
};