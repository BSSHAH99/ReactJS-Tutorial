import changeTheNumber from "./upDown.js";
import userData from "./userData.js";
import formReducer from "./formReducer";
import userReducer from "../reducer/userReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
  userData: userData,
  forms: formReducer,
  user: userReducer,
});

export default rootReducer;
