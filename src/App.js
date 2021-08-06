import React from "react";
import data from "./data";
import Students from "./students/Students";

!localStorage.getItem("students") && localStorage.setItem("students", data);
let studentData = JSON.parse(localStorage.getItem("students"));
function App() {
  return (
    <div>
      <Students studentData={studentData} />
    </div>
  );
}

export default App;
