import { ChangeEvent, FormEvent, useState } from "react";
import { AuthFields, AuthService } from "../../services/Auth/AuthService";
import "./Auth.scss";


const initialFormState = {email: "", password: ""};

export const Auth = () => {
  const [formFields, setFormFields] = useState<AuthFields>(initialFormState);
  const [isLogIn, setIsLogin] = useState<boolean>(false);
  //const { register, handleSubmit } = useForm();


  const onFieldsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormFields({...formFields, [name]: value});
  };

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (isLogIn) {
    } else {
      AuthService.register(formFields).then(res => console.log(res));
    }
  };

  return (
    <div className="auth__container">
      <form className="auth__form" onSubmit={onFormSubmit}>
        <label>
          Email:
          <input className="form-control" type="email" name="email" onChange={onFieldsChange} required />
        </label>
        <label>
          Password:
          <input className="form-control" type="password" name="password" onChange={onFieldsChange} minLength={6}
                 required />
        </label>
        <div className="btn-container">
          <button type="submit" className="btn btn-outline-success">{isLogIn ? "Log In" : "Sign In"}</button>
          <button type="button"
                  className="btn btn-outline-primary"
                  onClick={() => setIsLogin(!isLogIn)}
          >Switch to {isLogIn ? "Sign Up" : "Log In"}</button>
        </div>
      </form>
    </div>
  );
};