import { combineReducers } from "redux";
import authReducer from "./authReducers";
import { reducer as formReducer } from "redux-form";
import bateauReducer from "./bateauReducers";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  bateaux: bateauReducer,
});