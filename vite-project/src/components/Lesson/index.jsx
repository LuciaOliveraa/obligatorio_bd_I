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
    <div className={style.lessonInfo}>
      <div className={style.info1}>
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
              setModalVisible(true);
            }}
          >
            <Pencil className={style.pencil}></Pencil>
          </button>
        </div>
        
      </div>
      <div className={style.info2}>
      <div className={style.form}>
              <label for="date"> Filtrar inscripciones por fecha </label>
              <input 
                type="date" 
                id="date"
              />
            </div>
      </div>
      
        {modalVisible && (
          <EditModalLessons
            setVisible={setModalVisible}
            currentValues={{ id, instructorId, shiftId, activityId, capacity }}
            trigger = {trigger}
          />
        )}
    </div>
    
  );
}
