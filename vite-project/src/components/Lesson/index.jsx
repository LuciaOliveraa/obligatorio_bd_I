import style from "./Lesson.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go"; 
import { IoMdAdd as Add } from "react-icons/io";
import { EditModalLessons } from "../EditModalLessons";
import { useState } from "react";
import { getEnrollmentsByLessonDate, deleteEnrollment } from "../../services/EnrollmentsService";
import { useStudent } from "../../context/StudentContext";
import { CreateModalEnrollment } from "../CreateModalEnrollment";

export default function Lesson({
  instructorId,
  activityId,
  shiftId,
  capacity,
  id,
  trigger,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEnrollmentVisible, setModalEnrollmentVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(false);

  const {removeEnrollment} = useStudent(); 

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
      const newEnrollment = {
        lesson_id: id, 
        date: selectedDate, 
      }
      await deleteEnrollment(enrollment.student_ci, newEnrollment, removeEnrollment);
      setEnrollments((prevEnrollments) => 
        prevEnrollments.filter((item) => item.student_ci !== enrollment.student_ci)
      );
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
        <div>
          {selectedDate && (
            <div>
              <button
                className={style.addButton}
                onClick={() => setModalEnrollmentVisible(true)}
              >
                <Add className={style.add} />
              </button>
            </div>
          )}
        </div>
      </div>

      {loading ? (
        <div>Cargando inscripciones...</div>
      ) : enrollments.length > 0 ? (
        <div className={style.enrollments}>
          <ul>
            {enrollments.map((enrollment) => (
              <li key={enrollment.id}>
                {enrollment.name} {enrollment.lastname}
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
      {modalEnrollmentVisible && (
        <CreateModalEnrollment
          setVisible={setModalEnrollmentVisible}
          trigger={trigger}
          lesson_id={id}
          date={selectedDate}
        />
      )}
    </div>
  );
}




