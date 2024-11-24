import style from "./Shift.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";
import { useState } from "react";
import { EditModalShifts } from "../EditModalShifts";
import { deleteShift } from "../../services/shiftsService";

export default function Shift({ startsAt, endsAt, id, trigger}) {
  const [modalVisible, setModalVisible] = useState(false);
  
  const eraseShift = async () => {
    try {
      await deleteShift(id);
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error eliminando turno", error);
    }
  }

  return (
    <div className={style.infoandbuttons}>
      <div className={style.info}>
        <span>
          <strong>Horario incio: </strong>
          {startsAt}
        </span>
        <span>
          <strong>Horario fin: </strong>
          {endsAt}
        </span>
      </div>
      <div className="buttons">
        <button className={style.deletebutton} onClick={eraseShift}>
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
        <EditModalShifts
          setVisible={setModalVisible}
          currentValues={{ startsAt, endsAt, id}}
          trigger = {trigger}
        />
      )}
    </div>
  );
}
