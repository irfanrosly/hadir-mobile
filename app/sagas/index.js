import { all, takeLatest, take } from "redux-saga/effects";

// Redux files
import { PlaygroundTypes } from "../redux/playground";
import { StudentTypes } from "../redux/student";
import { AttendanceTypes } from "../redux/attendance";
// Saga files
import { playgroundTestSaga } from "./playground";
import { createStudent, getStudent, getStudentAll } from "./student";
import { createAttendance } from "./attendance";
import API from "../utils/api";

const api = API.create();

export default function* rootSaga() {
  yield all([
    takeLatest(PlaygroundTypes.PLAYGROUND1, playgroundTestSaga, api),
    takeLatest(StudentTypes.CREATE_STUDENT, createStudent, api),
    takeLatest(StudentTypes.GET_STUDENT, getStudent, api),
    takeLatest(StudentTypes.GET_STUDENT_ALL, getStudentAll, api),
    takeLatest(AttendanceTypes.CREATE_ATTENDANCE, createAttendance, api)
  ]);
}
