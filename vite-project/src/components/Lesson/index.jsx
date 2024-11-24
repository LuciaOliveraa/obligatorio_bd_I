import style from "./Lesson.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { EditModalLessons } from "../EditModalLessons";
import { useState } from "react";

export default function Lesson({
  instructorId,
  activityId,
  shiftId,
  capacity,
  id, 
  trigger
}) {
  const [modalVisible, setModalVisible] = useState(false); 

  return (
    <div className={style.infoandbuttons}>
      <div className={style.info}>
        <span>
          <strong>ID instructor: </strong>
          {instructorId}
        </span>
        <span>
          <strong>ID actividad: </strong>
          {activityId}
        </span>
        <span>
          <strong>ID turno: </strong>
          {shiftId}
        </span>
        <span>
          <strong>Capacidad: </strong>
          {capacity}
        </span>
      </div>
      <div className="buttons">
        <button
          className={style.editbutton}
          onClick={() => {
            setVisibleLessons(true);
          }}
        >
          <Pencil className={style.pencil}></Pencil>
        </button>
      </div>
      {modalVisible && (
        <EditModalActivities
          setVisible={setModalVisible}
          currentValues={{ id, instructorId, shiftId, activityId, capacity }}
          trigger = {trigger}
        />
      )}
    </div>
  );
}
