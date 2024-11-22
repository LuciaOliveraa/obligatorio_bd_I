import style from "./Instructors.module.css";
import Instructor from "../Instructor";
import { IoMdAdd as Add } from "react-icons/io";
import { getInstructors } from "../../services/instructorsService";
import { useEffect, useState } from "react";

export default function Instructors({ setVisibleInstructors }) {
  const [instructors, setInstructors] = useState([]);

  const fetchInstructors = async () => {
    try {
      const data = await getInstructors();
      setInstructors(data);
      console.log("print instructors: ", data);
    } catch (error) {
      console.error("Error fetching instructors:", error);
    }
  };

  useEffect(() => {
    fetchInstructors();
    console.log("print feed: ", feed);
  }, []);

  return (
    <div>
      <div className={style.instructorsAndAdd}>
        <p className={style.instructorsTitle}>Instructores</p>
        <button className={style.addButton}>
          <Add className={style.add}></Add>{" "}
        </button>
      </div>
      <div className={style.allInstructors}>
        {instructors.map((instructor) => (
          <Instructor
            ci={instructor.ci}
            name={instructor.name}
            lastname={instructor.lastname}
            setVisibleInstructors={setVisibleInstructors}
          />
        ))}

        {/* <Instructor
          ci="48671210"
          name="Elba"
          lastname="Lazo"
          setVisibleInstructors={setVisibleInstructors}
        />*/}
      </div>
    </div>
  );
}
