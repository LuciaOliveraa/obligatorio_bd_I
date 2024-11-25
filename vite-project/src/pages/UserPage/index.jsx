import style from "./Style.module.css";
import Navbar from "../../components/NavBar";
import { GoTrash as Trash } from "react-icons/go";
import { useState, useEffect } from "react";
import { useUserType } from "../../context/UserTypeContext";
import { useStudent } from "../../context/StudentContext";
import { useInstructor } from "../../context/InstructorContext";
import { getLessons } from "../../services/lessonsService";
import { deleteEnrollment } from "../../services/enrollmentsService";
import { getAllEquipment } from "../../services/equipmentService";

export function UserPage() {
  const { userType } = useUserType();
  const { student, removeEnrollment, removeRent } = useStudent();
  const { instructor } = useInstructor();

  const [ user, setUser ] = useState({});
  const [ isAdmin, setIsAdmin ] = useState(userType == "admin");
  const [ lessons, setLessons ] = useState([]);
  const [ equipment, setEquipment ] = useState([]);

  useEffect(() => {
    if (userType == "student") {
      setUser(student);
    } else if (userType == "instructor") {
      setUser(instructor);
    }
  }, [userType, student, instructor]);

  const deleteEnrollmentHandler = async (enrollmentId, enrollment, removeEnrollment) => {
    await deleteEnrollment(enrollmentId, enrollment, removeEnrollment);
  }

  const deleteRentHandler = async (rentId, rent, removeRent) => {

  }

  // Visualización enrollments
  const fetchLessons = async () => {
    const data = await getLessons();
    setLessons(data);
    console.log("lessons: ",data);
  }

  const activities = ['Moto de nieve', 'Snowboard', 'Ski'];
  const shifts = ['matutino', 'mediodía', 'vespertino'];
  const enrollmentLessonInfo = lessons.map((lesson) => (`${activities[lesson?.activity_id -1]} en el turno ${shifts[lesson?.shift_id -1]}`));


  // Visualización rents
  const fetchEquipment = async () => {
    const data = await getAllEquipment();
    const equipmentList = data.map((equip) => (equip?.description));
    setEquipment(equipmentList);
  }


  const formatDate = (dateTime) => {
    const date = new Date(dateTime);
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' };
    return date.toLocaleDateString('es-ES', options);
  }

  useEffect(() => {
    fetchLessons();
    fetchEquipment();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      { !isAdmin ? 
      <div className={style.pageContent}>
        <div className={style.box}>
          <p className={style.title}> Mis Datos</p>
          <div className={style.boxContent}>
            <div className={style.userData}>

              { userType === 'student' &&
                (<>
                <p className={style.userDataItem}>
                  <strong> ci:</strong> {user?.id}
                </p>

                <p className={style.userDataItem}>
                  <strong> Nombre:</strong> {user?.name}
                </p>

                <p className={style.userDataItem}>
                  <strong> Apellido:</strong> {user?.lastname}
                </p>

                <p className={style.userDataItem}>
                  <strong> Fecha de nacimiento:</strong> {formatDate(user?.birthdate)}
                </p>

                <p className={style.userDataItem}>
                  <strong> Email:</strong> {user?.email}
                </p>

                <p className={style.userDataItem}>
                  <strong> Teléfono:</strong> {user?.phone_number}
                </p>

                <div className={style.userDataItem}>
                  <p>
                    <strong>Inscripciones:</strong>
                    <ul>
                    {user?.enrollments?.map((enrollment) => (
                      <li className={style.classItem}>
                        <span> {enrollmentLessonInfo[enrollment?.lesson_id -1]} de {formatDate(enrollment?.date)}. </span>
                        <Trash className={style.trashIcon} onClick={deleteEnrollmentHandler(enrollment.student_ci, enrollment, removeEnrollment)}/>
                      </li>
                    ))}
                    </ul>   
                  </p>
                </div>

                <div className={style.userDataItem}>
                  <p>
                    <strong>Alquileres:</strong>
                    <ul>
                    {user?.rents?.map((rent) => (
                      <li className={style.classItem}>
                        <span> {equipment[rent.equipment_id -1]} el {formatDate(rent?.date)}. </span>
                        <Trash className={style.trashIcon} onClick={deleteRentHandler(rent.student_ci, rent, removeRent)}/>
                      </li>
                    ))}
                    </ul>   
                  </p>
                </div>
                </>)
              }


              { userType === 'instructor' &&
                (<>
                <p className={style.userDataItem}>
                  <strong> ci:</strong> {user?.id}
                </p>

                <p className={style.userDataItem}>
                  <strong> Nombre:</strong> {user?.name}
                </p>

                <p className={style.userDataItem}>
                  <strong> Apellido:</strong> {user?.lastname}
                </p>

                <p className={style.userDataItem}>
                  <strong> Email:</strong> {user?.email}
                </p>

                <div className={style.userDataItem}>
                  <p>
                    <strong>Docente en:</strong>
                    <ul>
                    {user?.lessons?.map((lesson) => (
                      <li className={style.classItem}>
                        <span> {activities[lesson?.activity_id -1]} en el turno {shifts[lesson?.shift_id -1]}. </span>
                      </li>
                    ))}
                    </ul>   
                  </p>
                  
                </div>
                </>)
              }
            </div>
          </div>
        </div>
      </div> :
      <span> No hay datos correspondientes para usuario administrador. </span>}
    </div>
  );
}
