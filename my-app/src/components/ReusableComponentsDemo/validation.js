import {
  email,
  password,
  alphabetWithSpace,
  confirmPassword,
  number,
} from "../reduxDemo/constants/AllConstants";

export const emailValidation = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
};

export const passwordValidation = (password) => {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
  return regex.test(password);
};

export const stringWithSpaceValidation = (value) => /^[A-Za-z\s]+$/.test(value);

export const isNumber = (value) => /^[0-9]+$/.test(value);

let passwordValue = "";
export default (pattern, value) => {
  if (pattern === password) {
    passwordValue = value.trim().length > 0 ? value : false;
  }
  switch (pattern) {
    case email:
      return emailValidation(value);
    case password:
      return passwordValidation(value);
    case alphabetWithSpace:
      return stringWithSpaceValidation(value);
    case confirmPassword:
      return value === passwordValue;
    case number:
      return isNumber(value);
    default:
      return false;
  }
};
