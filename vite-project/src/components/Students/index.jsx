import "./Students.css";
import Student from "../Student";
import { IoMdAdd as Add } from "react-icons/io";
import { getStudents } from "../../services/studentsService";
import { useEffect, useState } from "react";
import { CreateModalStudent } from "../CreateModalStudent";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [trigger, setTrigger] = useState(0); 
  const [addModalVisible, setAddModalVisible] = useState(false); 

  const fetchStudents = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
    } catch (error) {
      console.error("Error obteniendo alumnos:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [trigger]);

  return (
    <div>
      <div className="students-and-add">
        <h1 className="students-title">Alumnos</h1>
        <button className="add-button" onClick={() => {
            setAddModalVisible(true);
          }}>
          <Add className="add"></Add>{" "}
        </button>
      </div>
      <div className="all-students">
        {students.map((student) => (
          <Student
            key={student.ci}
            ci={student.ci}
            name={student.name}
            lastname={student.lastname}
            birthdate={student.birthdate}
            email={student.email}
            phone_number={student.phone_number}
            trigger = {setTrigger}
          />
        ))}
      </div>
      { addModalVisible && <CreateModalStudent setVisible={setAddModalVisible} trigger={setTrigger}/>}
    </div>
  );
}
