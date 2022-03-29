export const errorValidMessages = {
  required: "This filed is required",
  passwordMinLength: "Password length min 6 symbols"
};

export const validationRules = {
  email: { required: errorValidMessages.required },
  password: {
    required: errorValidMessages.required,
    minLength: { value: 6, message: errorValidMessages.passwordMinLength }
  }
};