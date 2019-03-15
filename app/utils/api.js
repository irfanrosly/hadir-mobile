import apisauce from "apisauce";

// define the api

const create = () => {
  const apiPlayground = apisauce.create({
    baseURL: "https://api.github.com",
    headers: { Accept: "application/vnd.github.v3+json" }
  });

  const apiHadir = apisauce.create({
    baseURL: "https://hadir-api.herokuapp.com/api/v2"
  });

  const getUser = username => {
    return apiPlayground.get(`/users/${username}`);
  };

  const createStudent = params => {
    return apiHadir.post(`/students`, JSON.stringify(params));
  };

  const getStudent = params => {
    return apiHadir.get(`/student/${params.year}/${params.class}`);
  };

  const getStudentAll = () => {
    return apiHadir.get(`/students`);
  };

  const createAttendance = params => {
    return apiHadir.post(`/attendance`, JSON.stringify(params));
  };

  return {
    getUser,
    createStudent,
    createAttendance,
    getStudent,
    getStudentAll
  };
};

export default { create };
