import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  createAttendance: ["id"],
  getAttendance: ["date", "year", "class"],
  getAttendanceSuccess: ["payload"]
});

export const AttendanceTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  loading: false,
  attendanceList: []
});

const createAttendance = state => {
  return state.merge({ loading: true });
};

const getAttendance = state => {
  return state.merge({
    loading: true
  });
};

const getAttendanceSuccess = (state, action) => {
  console.log(action.payload);
  return state.merge({
    loading: false,
    attendanceList: [...action.payload]
  });
};

export const attendance = createReducer(INITIAL_STATE, {
  [Types.CREATE_ATTENDANCE]: createAttendance,
  [Types.GET_ATTENDANCE]: getAttendance,
  [Types.GET_ATTENDANCE_SUCCESS]: getAttendanceSuccess
});
