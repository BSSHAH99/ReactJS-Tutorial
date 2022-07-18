export default function validation(values) {
  console.log("values +++++++++++++", values);
  let errors = {};

  const regUsername = /^[A-Za-z0-9]{3,16}$/i;
  const regEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i;

  if (!values.username) {
    errors.username = "Username is Required";
  } else if (!regUsername.test(values.username)) {
    errors.username =
      "Username should be 3-16 characte shouldn,t include any spiecial characte";
  }
  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!regEmail.test(values.email)) {
    errors.email = "iIt,s should be Valid Email";
  }
  if (!values.birthdy) {
    errors.birthdy = "birthdy is Required";
  }
  if (!values.birthdy123) {
    errors.birthdy123 = "birthdy is Required";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 4) {
    errors.password = "password more than 4 characte";
  }
  if (!values.cofirmpassword) {
    errors.cofirmpassword = "Cofirmpassword is Required";
  } else if (values.cofirmpassword.length < 4) {
    errors.cofirmpassword = "Password more than 4 characte";
  } else if (values.cofirmpassword != values.password) {
    errors.cofirmpassword = "Password is Not Match";
  }

  return errors;
}
