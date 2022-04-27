export const errorValidMessages = {
  required: "This filed is required",
  maxLength: "This fields must be shorter "
};

export const validationRules = {
  name: {
    required: errorValidMessages.required,
    maxLength: { value: 70, message: errorValidMessages.maxLength }
  },
  logoUrl: {
    required: errorValidMessages.required
  },
  shortDescription: {
    required: errorValidMessages.required,
    maxLength: { value: 200, message: errorValidMessages.maxLength }
  },
  description: {
    required: errorValidMessages.required,
    maxLength: { value: 1000, message: errorValidMessages.maxLength }
  }
};