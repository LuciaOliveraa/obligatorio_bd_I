import style from "./Instructors.module.css";
import Instructor from "../Instructor";
import { IoMdAdd as Add } from "react-icons/io";
import { getInstructors } from "../../services/instructorsService";
import { useEffect, useState } from "react";
import { CreateModalInstructor } from "../CreateModalInstructor";

export default function Instructors() {
  const [instructors, setInstructors] = useState([]);
  const [trigger, setTrigger] = useState(0); 
  const [addModalVisible, setAddModalVisible] = useState(false); 

  const fetchInstructors = async () => {
    try {
      const data = await getInstructors();
      setInstructors(data);
    } catch (error) {
      console.error("Error obteniendo instructores", error);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, [trigger]);

  return (
    <div>
      <div className={style.instructorsAndAdd}>
        <p className={style.instructorsTitle}>Instructores</p>
        <button className={style.addButton} onClick={() => {
            setAddModalVisible(true);
          }}>
          <Add className={style.add}></Add>{" "}
        </button>
      </div>
      <div className={style.allInstructors}>
        {instructors.map((instructor) => (
          <Instructor
            ci={instructor.ci}
            name={instructor.name}
            lastname={instructor.lastname}
            email={instructor.email}
            trigger = {setTrigger}
          />
        ))}
      </div>
      { addModalVisible && <CreateModalInstructor setVisible={setAddModalVisible} trigger={setTrigger}/>}
    </div>
  );
}
