import "./Students.css";
import Student from "../Student";
import { IoMdAdd as Add } from "react-icons/io";

export default function Students({ setVisible }) {
  return (
    <div>
      <div className="students-and-add">
        <h1 className="students-title">Alumnos</h1>
        <button className="add-button">
          <Add className="add"></Add>{" "}
        </button>
      </div>
      <div className="all-students">
        <Student
          setVisible={setVisible}
          ci="25467891"
          name="Agustin"
          lastname="Fernandez"
          birthdate="2004-05-08"
          email="agustin.fernandez@correo.ucu.edu.uy"
          phone_number="095478323"
        />
        <Student
          ci="25467891"
          name="Agustin"
          lastname="Fernandez"
          birthdate="2004-05-08"
          email="agustin.fernandez@correo.ucu.edu.uy"
          phone_number="095478323"
        />
        <Student
          ci="25467891"
          name="Agustin"
          lastname="Fernandez"
          birthdate="2004-05-08"
          email="agustin.fernandez@correo.ucu.edu.uy"
          phone_number="095478323"
        />
        <Student
          ci="25467891"
          name="Agustin"
          lastname="Fernandez"
          birthdate="2004-05-08"
          email="agustin.fernandez@correo.ucu.edu.uy"
          phone_number="095478323"
        />
      </div>
    </div>
  );
}
