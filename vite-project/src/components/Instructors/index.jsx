import style from "./Instructors.module.css";
import Instructor from "../Instructor";
import { IoMdAdd as Add } from "react-icons/io";

export default function Instructors({ setVisibleInstructors }) {
  return (
    <div>
      <div className={style.instructorsAndAdd}>
        <p className={style.instructorsTitle}>Instructores</p>
        <button className={style.addButton}>
          <Add className={style.add}></Add>{" "}
        </button>
      </div>
      <div className={style.allInstructors}>
        <Instructor
          ci="48671210"
          name="Elba"
          lastname="Lazo"
          setVisibleInstructors={setVisibleInstructors}
        />
        <Instructor
          ci="48671210"
          name="Elba"
          lastname="Lazo"
          setVisibleInstructors={setVisibleInstructors}
        />
        <Instructor
          ci="48671210"
          name="Elba"
          lastname="Lazo"
          setVisibleInstructors={setVisibleInstructors}
        />
      </div>
    </div>
  );
}
