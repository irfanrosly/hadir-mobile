import StudentActions from "../redux/student";
import { call, put } from "redux-saga/effects";

export function* createStudent(api, action) {
  const response = yield call(api.createStudent, action);
  console.log(response);
  if (response.ok) {
    alert(response.data.message);
  } else if (response.status === 422) {
    yield alert(response.data.message);
  }
}

export function* getStudent(api, action) {
  const response = yield call(api.getStudent, action);
  if (response.ok) {
    yield put(StudentActions.getStudentSuccess(response.data.data));
  }
}

export function* getStudentAll(api, action) {
  const response = yield call(api.getStudentAll, action);
  if (response.ok) {
    yield put(StudentActions.getStudentSuccess(response.data.data));
  }
}
