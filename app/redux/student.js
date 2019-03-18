import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  createStudent: ["id", "name", "year", "class"],
  getStudent: ["year", "class"],
  getStudentSuccess: ["payload"],
  getStudentAll: null,
  getStudentAllSuccess: ["payload"]
});

export const StudentTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  loading: false,
  studentList: []
});

const createStudent = state => {
  return state.merge({ loading: true });
};

const getStudent = state => {
  return state.merge({
    loading: true
  });
};

const getStudentSuccess = (state, action) => {
  console.log(action.payload);
  return state.merge({
    loading: false,
    studentList: [...action.payload]
  });
};

const getStudentAll = state => {
  return state.merge({
    loading: true
  });
};

const getStudentAllSuccess = (state, action) => {
  return state.merge({
    loading: false,
    studentList: [...action.payload]
  });
};

export const student = createReducer(INITIAL_STATE, {
  [Types.CREATE_STUDENT]: createStudent,
  [Types.GET_STUDENT]: getStudent,
  [Types.GET_STUDENT_SUCCESS]: getStudentSuccess,
  [Types.GET_STUDENT_ALL]: getStudentAll,
  [Types.GET_STUDENT_ALL_SUCCESS]: getStudentAllSuccess
});
