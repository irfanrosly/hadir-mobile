import { combineReducers } from "redux";
import { playground } from "./playground";
import { student } from "./student";
import { attendance } from "./attendance";
export default combineReducers({
  playground,
  student,
  attendance
});
