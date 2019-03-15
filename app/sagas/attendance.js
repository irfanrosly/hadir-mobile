import Attendancections from "../redux/attendance";
import { call, put } from "redux-saga/effects";

export function* createAttendance(api, action) {
  const response = yield call(api.createAttendance, action);
  console.log(response);
  if (response.ok) {
    alert(response.data.message);
  } else if (response.status === 422 || response.status === 400) {
    yield alert(response.data.message);
  }
}
