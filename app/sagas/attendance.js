import AttendanceActions from "../redux/attendance";
import { call, put } from "redux-saga/effects";

export function* createAttendance(api, action) {
  const response = yield call(api.createAttendance, action);
  if (response.ok) {
    alert(response.data.message);
  } else if (response.status === 422 || response.status === 400) {
    yield alert(response.data.message);
  }
}

export function* getAttendance(api, action) {
  const response = yield call(api.getAttendance, action);
  if (response.ok) {
    yield put(AttendanceActions.getAttendanceSuccess(response.data.data));
  }
}
