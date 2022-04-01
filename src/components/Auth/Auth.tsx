import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { validationRules } from "./validationRules";
import { AuthFields, AuthService } from "../../services/Auth/AuthService";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/User/reducer";
import "./Auth.scss";

type FormField = "email" | "password" | "permissionRole"


export const Auth = () => {
  const [isLogIn, setIsLogin] = useState<boolean>(true);
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFields>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleErrors = (fieldName: FormField) => {
    const errorMessage = errors[fieldName]?.message;
    return errorMessage ? (<p className="alert-danger">{errorMessage}</p>) : null;
  };

  const onSubmit = (formValues: AuthFields) => {
    if (isLogIn) {
      AuthService.login(formValues).then((newUser) => {
        if (newUser) {
          dispatch(setUser(newUser));
          navigate("/");
        }
      });
    } else {
      AuthService.register(formValues).then((newUser) => {
        if (newUser) {

          dispatch(setUser(newUser));
          navigate("/");
        }
      });
    }
  };

  return (
    <div className="auth__container">
      <form className="auth__form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email Address:
          <input className="form-control"
                 type="email" {...register("email", validationRules.email)} />
          {handleErrors("email")}
        </label>
        <label>
          Password:
          <input className="form-control" type="password" {...register("password", validationRules.password)} />
          {handleErrors("password")}
        </label>
        {
          !isLogIn && (
            <label>
              Account Type
              <select className="form-select" {...register("permissionRole", validationRules.permissionSelect)}>
                <option value="admin">Teacher</option>
                <option value="user">Student</option>
              </select>
            </label>

          )
        }
        <div className="btn-container">
          <button type="submit" className="btn btn-outline-success">{isLogIn ? "Log In" : "Sign Up"}</button>
          <button type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setIsLogin(!isLogIn)}
          >Switch to {isLogIn ? "Sign Up" : "Log In"}</button>
        </div>
      </form>
    </div>
  );
};