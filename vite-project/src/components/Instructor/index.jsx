import style from "./Instructor.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";
import { EditModalInstructors } from "../EditModalInstructors";
import { useState } from "react";
import { deleteInstructor } from "../../services/instructorsService";

export default function Instructor({ ci, name, lastname, email, trigger }) {
  const [modalVisible, setModalVisible] = useState(false);

  const eraseInstructor = async () => {
    try {
      await deleteInstructor(ci);
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error eliminando instructor", error);
    }
  }

  return (
    <>
      <div className={style.infoandbuttons}>
        <div className={style.info}>
          <span>
            <strong>CI: </strong>
            {ci}
          </span>
          <span>
            <strong>Nombre: </strong>
            {name} {lastname}
          </span>
        </div>
        <div className="buttons">
          <button className={style.deletebutton} onClick={eraseInstructor}>
            <Trash className={style.trash}></Trash>
          </button>
          <button
            className={style.editbutton}
            onClick={() => {
              setModalVisible(true);
            }}
          >
            <Pencil className={style.pencil}></Pencil>
          </button>
        </div>
      </div>
      {modalVisible && (
        <EditModalInstructors
          setVisible={setModalVisible}
          currentValues={{ci, name, lastname, email}}
          trigger = {trigger}
        />
      )}
    </>
  );
}
