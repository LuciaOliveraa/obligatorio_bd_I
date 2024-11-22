import style from "./Lesson.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";

export default function Lesson({
  instructorId,
  activityId,
  shiftId,
  capacity
}) {
  return (
    <div className={style.infoandbuttons}>
      <div className={style.info}>
        <span>
          <strong>Instructor: </strong>
          {instructorId}
        </span>
        <span>
          <strong>Actividad: </strong>
          {activityId}
        </span>
        <span>
          <strong>Turno: </strong>
          {shiftId}
        </span>
        <span>
          <strong>Capacidad: </strong>
          {capacity}
        </span>
      </div>
      <div className="buttons">
        <button className={style.deletebutton}>
          <Trash className={style.trash}></Trash>
        </button>
        <button
          className={style.editbutton}
          onClick={() => {
            setVisibleLessons(true);
          }}
        >
          <Pencil className={style.pencil}></Pencil>
        </button>
      </div>
    </div>
  );
}
