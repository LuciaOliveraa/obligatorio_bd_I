import style from "./Student.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";
import { EditModalStudent } from "../EditModalStudent";
import { useState } from "react";
import { deleteStudent } from "../../services/studentsService";

export default function Student({ci, email, name, lastname, birthdate, phone_number, trigger}) {
  const [modalVisible, setModalVisible] = useState(false);

  const eraseStudent = async () => {
    try {
      await deleteStudent(ci);
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error eliminando alumno", error);
    }
  }

  return (
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
        <span>
          <strong>Email: </strong>
          {email}
        </span>
      </div>
      <div className="buttons">
        <button className={style.deletebutton} onClick={eraseStudent}>
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
      {modalVisible && (
        <EditModalStudent
          setVisible={setModalVisible}
          currentValues={{ci, email, name, lastname, birthdate, phone_number}}
          trigger = {trigger}
        />
      )}
    </div>
  );
}
