import style from "./Lesson.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";

export default function Lesson({
  instructor,
  activity,
  shift,
  capacity,
  setVisibleLessons,
}) {
  return (
    <div className={style.infoandbuttons}>
      <div className={style.info}>
        <span>
          <strong>Instructor: </strong>
          {instructor}
        </span>
        <span>
          <strong>Actividad: </strong>
          {activity}
        </span>
        <span>
          <strong>Turno: </strong>
          {shift}
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
