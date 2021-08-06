import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listStudents,
  deleteStudent,
  updateStudent,
  addStudent,
} from "../actions/studentsAction";
import StudentModal from "./StudentModal";

function Students(props) {
  let { studentData } = props;
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [mode, setMode] = useState("create");
  const dispatch = useDispatch();
  const studentsList = useSelector((state) => state.studentsList);
  const { isLoading } = studentsList;
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDelete = (id) => {
    dispatch(deleteStudent(id, studentData));
    setRefresh(!refresh);
  };
  const selectStudent = (id) => {
    let student = studentData.find((student) => student.id === id);
    setMode("update");
    student && setFormData(student);
    setOpen(true);
  };
  const handleUpdate = () => {
    dispatch(updateStudent(formData, studentData));
    setOpen(false);
    setRefresh(!refresh);
  };
  const addNewStudent = () => {
    dispatch(addStudent(formData, studentData));
    setOpen(false);
    setRefresh(!refresh);
  };
  const handleNewForm = () => {
    setMode("create");
    setFormData(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(listStudents(studentData));
  }, [dispatch, refresh]);
  return (
    <div>
      <button onClick={handleNewForm} className="btn btn-primary">
        + New Student
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <h4>Loading...</h4>
          ) : (
            studentData &&
            studentData.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <button
                    onClick={() => selectStudent(student.id)}
                    className="btn btn-secondary"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <StudentModal
        isOpen={open}
        onClose={handleClose}
        onFormChange={handleFormChange}
        onUpdate={handleUpdate}
        data={formData}
        mode={mode}
        onCreate={addNewStudent}
      />
    </div>
  );
}

export default Students;
