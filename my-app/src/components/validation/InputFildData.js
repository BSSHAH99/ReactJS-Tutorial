const input = [
  {
    id: 1,
    name: "username",
    type: "text",
    placeholder: "Enetr User Name",
    label: "User Name",
    pattern: "^[A-Za-z0-9]{3,16}$",
  },
  {
    id: 2,
    name: "email",
    type: "text",
    placeholder: "Enetr Email",
    label: "Email",
    pattern: "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
  },
  {
    id: 3,
    name: "birthdy",
    type: "date",
    placeholder: "Enetr Birthdy",
    // errorMessages: "iIt,s should be Valid Email",
    label: "Birthdy",
    pattern: "bhavik",
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "Enetr Password",
    autoComplete: "on",
    label: "Password",
  },
  {
    id: 5,
    name: "cofirmpassword",
    type: "password",
    placeholder: "Enetr Cofirmpassword",
    autoComplete: "on",
    label: "Cofirmpassword",
  },
];

export default input;
