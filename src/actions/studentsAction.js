export const listStudents = (studentData) => async (dispatch) => {
  try {
    dispatch({ type: "STUDENTS_LIST_REQUEST" });

    dispatch({ type: "STUDENTS_LIST_SUCCESS", payload: studentData });
  } catch (error) {
    dispatch({ type: "STUDENTS_LIST_FAILURE", payload: studentData });
  }
};

export const deleteStudent = (id, studentData) => async (dispatch) => {
  try {
    dispatch({ type: "STUDENT_DELETE_REQUEST" });
    let index = studentData.findIndex((student) => student.id === id);
    studentData.splice(index, 1);
    localStorage.setItem("students", `${JSON.stringify(studentData)}`);
    dispatch({ type: "STUDENTS_DELETE_SUCCESS", payload: studentData });
  } catch (error) {
    dispatch({ type: "STUDENTS_LIST_FAILURE", payload: studentData });
  }
};
export const updateStudent = (newData, studentData) => async (dispatch) => {
  try {
    dispatch({ type: "STUDENT_UPDATE_REQUEST" });
    let index = studentData.findIndex((student) => student.id === newData.id);
    studentData[index] = newData;
    localStorage.setItem("students", `${JSON.stringify(studentData)}`);
    dispatch({ type: "STUDENTS_UPDATE_SUCCESS", payload: studentData });
  } catch (error) {
    dispatch({ type: "STUDENTS_UPDATE_FAILURE", payload: studentData });
  }
};

export const addStudent = (newData, studentData) => async (dispatch) => {
  try {
    dispatch({ type: "STUDENT_ADD_REQUEST" });
    let maxId = 0;
    studentData.forEach((max) => {
      if (max.id > maxId) {
        maxId = parseInt(max.id);
      }
    });
    studentData.push({ id: maxId + 1, ...newData });
    localStorage.setItem("students", `${JSON.stringify(studentData)}`);
    dispatch({ type: "STUDENTS_ADD_SUCCESS", payload: studentData });
  } catch (error) {
    dispatch({ type: "STUDENTS_ADD_FAILURE", payload: studentData });
  }
};
