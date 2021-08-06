export const studentListReducer = (state = {}, action) => {
  switch (action.type) {
    case "STUDENTS_LIST_REQUEST":
      return { isLoading: true, students: [] };
    case "STUDENTS_LIST_SUCCESS":
      return { isLoading: false, students: action.payload };
    case "STUDENTS_LIST_FAILURE":
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};
export const studentDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "STUDENT_DELETE_REQUEST":
      return { isLoading: true, students: [] };
    case "STUDENT_DELETE_SUCCESS":
      return { isLoading: false, students: action.payload };
    case "STUDENT_DELETE_FAILURE":
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};
export const studentUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case "STUDENT_UPDATE_REQUEST":
      return { isLoading: true, students: [] };
    case "STUDENT_UPDATE_SUCCESS":
      return { isLoading: false, students: action.payload };
    case "STUDENT_UPDATE_FAILURE":
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};
export const studentAddReducer = (state = {}, action) => {
  switch (action.type) {
    case "STUDENT_ADD_REQUEST":
      return { isLoading: true, students: [] };
    case "STUDENT_ADD_SUCCESS":
      return { isLoading: false, students: action.payload };
    case "STUDENT_ADD_FAILURE":
      return { isLoading: false, error: action.payload };
    default:
      return state;
  }
};
