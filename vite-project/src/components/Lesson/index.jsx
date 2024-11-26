import style from "./Lesson.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go"; 
import { EditModalLessons } from "../EditModalLessons";
import { useState } from "react";
import { getEnrollmentsByLessonDate, deleteEnrollmentFetch } from "../../services/EnrollmentsService";

export default function Lesson({
  instructorId,
  activityId,
  shiftId,
  capacity,
  id,
  trigger,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDateChange = async (event) => {
    const date = event.target.value;
    setSelectedDate(date);

    if (!date) {
      setEnrollments([]);
      return;
    }

    try {
      setLoading(true);
      const result = await getEnrollmentsByLessonDate(id, date);
      setEnrollments(result || []);
    } catch (error) {
      console.error("Error obteniendo inscripciones:", error);
      setEnrollments([]);
    } finally {
      setLoading(false);
    }
  };

  const eraseEnrollment = async (enrollment) => {
    try {
      await deleteEnrollmentFetch(enrollment.id, enrollment, (enr) => {
        setEnrollments((prev) =>
          prev.filter((e) => e.id !== enr.id)
        );
      });
    } catch (error) {
      console.error("Error eliminando inscripción:", error);
    }
  };

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
            onClick={() => setModalVisible(true)}
          >
            <Pencil className={style.pencil}></Pencil>
          </button>
        </div>
      </div>
      <div className={style.info2}>
        <div className={style.form}>
          <label htmlFor="date">Filtrar inscripciones por fecha</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
      </div>

      {loading ? (
        <div>Cargando inscripciones...</div>
      ) : enrollments.length > 0 ? (
        <div className={style.enrollments}>
          <ul>
            {enrollments.map((enrollment) => (
              <li key={enrollment.id}>
                <strong>Estudiante:</strong> {enrollment.name} {enrollment.lastname}
                <button
                  className={style.deletebutton}
                  onClick={() => eraseEnrollment(enrollment)}
                >
                  <Trash className={style.trash}></Trash>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : selectedDate ? (
        <div>No hay inscripciones para esta fecha.</div>
      ) : null}

      {modalVisible && (
        <EditModalLessons
          setVisible={setModalVisible}
          currentValues={{ id, instructorId, shiftId, activityId, capacity }}
          trigger={trigger}
        />
      )}
    </div>
  );
}




