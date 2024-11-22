import "./Students.css";
import Student from "../Student";
import { IoMdAdd as Add } from "react-icons/io";
import { getStudents } from "../../services/studentsService";
import { useEffect, useState } from "react";

export default function Students({ setVisible }) {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
      console.log("print students: ", data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
    console.log("print students: ", students);
  }, []);

  return (
    <div>
      <div className="students-and-add">
        <h1 className="students-title">Alumnos</h1>
        <button className="add-button">
          <Add className="add"></Add>{" "}
        </button>
      </div>
      <div className="all-students">
        {students.map((student) => {
          <Student
            key={student.ci}
            ci={student.ci}
            name={student.name}
            lastname={student.lastname}
            birthdate={student.birthdate}
            email={student.email}
            phone_number={student.phone_number}
          />;
        })}
      </div>
    </div>
  );
}
