import style from "./Style.module.css";
import Navbar from "../../components/NavBar";
import { GoTrash as Trash } from "react-icons/go";
import { useState, useEffect } from "react";
import { useUserType } from "../../context/UserTypeContext";
import { useStudent } from "../../context/StudentContext";
import { useInstructor } from "../../context/InstructorContext";

export function UserPage() {
  const { userType } = useUserType();
  const { student } = useStudent();
  const { instructor } = useInstructor();

  const [ user, setUser ] = useState({});
  const [ isAdmin, setIsAdmin ] = useState(userType == "admin");

  useEffect(() => {
    if (userType == "student") {
      setUser(student);
    } else if (userType == "instructor") {
      setUser(instructor);
    }
  }, [userType, student, instructor]);


  const activities = ['Moto de nieve', 'Snowboard', 'Ski'];
  const shifts = ['matutino', 'mediodía', 'vespertino'];
  const lessons = [`${activities[0]} en el turno ${shifts[0]}`,
                  `${activities[0]} en el turno ${shifts[1]}`,
                  `${activities[0]} en el turno ${shifts[2]}`,
                  `${activities[1]} en el turno ${shifts[0]}`,
                  `${activities[1]} en el turno ${shifts[1]}`,
                  `${activities[1]} en el turno ${shifts[2]}`,
                  `${activities[2]} en el turno ${shifts[0]}`,
                  `${activities[2]} en el turno ${shifts[1]}`,
                  `${activities[2]} en el turno ${shifts[2]}`,];

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
                  <strong> Fecha de nacimiento:</strong> {user?.birthdate}
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
                        <span> {lessons[enrollment?.activity_id -1]}. </span>
                        <Trash className={style.trashIcon} />
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
                        {/* <Trash className={style.trashIcon} /> */}
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
