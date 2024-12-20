import Navbar from "../../components/NavBar";
import { ScheduleItem } from "../../components/ScheduleItem";
import "./style.css";
import { useState, useEffect } from "react";
import { getLessonByActivity } from "../../services/lessonsService";
import { getActivities } from "../../services/activitiesService";
import { getInstructors } from "../../services/instructorsService";
import { getShifts } from "../../services/shiftsService";
import { useNavigate } from "react-router-dom";

export default function Schedule({enrollment, setEnrollment}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [lessons, setLessons] = useState([]); 
  const [activities, setActivities] = useState([]); 
  const [instructors, setInstructors] = useState([]); 
  const [shifts, setShifts] = useState([]); 

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const fetchLessons = async () => {
    try {
      console.log("enrollment en schedule: ", enrollment);
      const data = await getLessonByActivity(enrollment.activityId); 
      console.log("respuesta getLessonByActivity ",data);
      console.log(enrollment);

      setLessons(data);
      console.log("lessons", data); 
    } catch (error) {
      console.error("Error obteniendo turnos por actividad")
    }
  }

  useEffect(() => {
    fetchLessons();
    fetchActivities();
    fetchInstructors(); 
    fetchShifts();
  }, [])

  const fetchActivities = async () => {
    try {
      const data = await getActivities();
      setActivities(data)
      console.log("activites", data)
    } catch (error) {
      console.error("Error obteniendo actividades")
    }
  }

  const fetchInstructors = async () => {
    try {
      const data = await getInstructors();
      setInstructors(data)
      console.log("instructors", data)
    } catch (error) {
      console.error("Error obteniendo instructores")
    }
  }

  const fetchShifts = async () => {
    try {
      const data = await getShifts();
      setShifts(data)
      console.log("shifts", data)
    } catch (error) {
      console.error("Error obteniendo instructores")
    }
  }


  return (
    <div className="schedule">
      <Navbar />
      <div className="content">
        <h1 className='title is-1'>Seleccione una fecha</h1>
        <input
          id="dateInput"
          type="date"
          value={selectedDate}
          onChange={handleChange}
          className="date-input"
        />
        <h1 className="title is-1">Seleccione un horario</h1>
        <div className="horarios">
          {lessons?.map((lesson) => {
            const shift = shifts.find((s) => s.id === lesson.shift_id);
            const instructor = instructors.find((i) => i.ci === lesson.instructor_ci);

            return (
            <ScheduleItem 
              key={lesson.id}
              nombreHorario={shift?.name}
              instructor={instructor?.name}
              modalidad={lesson?.capacity}
              horario={` ${shift?.starting_time} a ${shift?.end_time}`}

              onClick={() => {
                setEnrollment((prev) => ({
                    ...prev,
                    shift: shift,
                    time: ` ${shift?.starting_time} a ${shift?.end_time}`,
                    instructorName: instructor.name,
                    date: selectedDate,
                    lessonId: lesson.id
                }));

                navigate(`/summary`);
            }}
            />
          )})}
       
        </div>
      </div>
    </div>
  );
}
