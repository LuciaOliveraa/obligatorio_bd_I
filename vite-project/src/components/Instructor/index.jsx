import style from "./Instructor.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";
import { EditModalInstructors } from "../EditModalInstructors";
import { useState } from "react";

export default function Instructor({ ci, name, lastname }) {
  const [modalVisible, setModalVisible] = useState(false);

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
          <button className={style.deletebutton}>
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
          setVisibleInstructors={setModalVisible}
          values={[ci, name, lastname]}
        />
      )}
    </>
  );
}
