import {
  email,
  password,
  alphabetWithSpace,
  confirmPassword,
  number,
} from "./AllConstants";
export default {
  userName: {
    type: "text",
    isRequired: true,
    errorMessage: "Only Alphabets",
    pattern: alphabetWithSpace,
    autoComplete: "username",
  },
  email: {
    type: "text",
    isRequired: true,
    errorMessage: "Invalid Email",
    pattern: email,
    autoComplete: "email",
  },
  age: {
    type: "text",
    isRequired: true,
    errorMessage: "age is required",
    pattern: number,
    autoComplete: "age",
  },
  password: {
    type: "password",
    isRequired: true,
    errorMessage: "Atleast 8 character with one symbol,small,capital letter",
    pattern: password,
    autoComplete: "new-password",
  },
  confirmPassword: {
    type: "password",
    isRequired: true,
    errorMessage: "confirm password must match",
    pattern: confirmPassword,
    autoComplete: "new-password",
  },
};
