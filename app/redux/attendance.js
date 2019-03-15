import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  createAttendance: ["id"]
});

export const AttendanceTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  loading: false
});

const createAttendance = state => {
  return state.merge({ loading: true });
};

export const attendance = createReducer(INITIAL_STATE, {
  [Types.CREATE_ATTENDANCE]: createAttendance
});
