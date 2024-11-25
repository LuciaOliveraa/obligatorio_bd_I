import Navbar from "../../components/NavBar";
import { ScheduleItem } from "../../components/ScheduleItem";
import "./style.css";
import { useState, useEffect } from "react";
import { getLessonByActivity } from "../../services/lessonsService";
import { getActivities } from "../../services/activitiesService";

export default function Schedule({enrollment, setEnrollment}) {
  const [selectedDate, setSelectedDate] = useState('');
  const [lessons, setLessons] = useState([]); 

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const fetchLessons = async () => {
    try {
      const data = await getActivities(enrollment.activityId); 
      console.log(data)
      setLessons(data)
    } catch (error) {
      console.error("Error obteniendo turnos por actividad")
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
          <ScheduleItem
            nombreHorario="Matutino"
            instructor="Sergio"
            modalidad="Grupal"
            horario="9:00 a 11:00"
          />
          <ScheduleItem
            nombreHorario="Mediodía"
            instructor="Belen"
            modalidad="Individual"
            horario="12:00 a 14:00"
          />
          <ScheduleItem
            nombreHorario="Nocturno"
            instructor="Sergio"
            modalidad="Grupal"
            horario="16:00 a 18:00"
          />
        </div>
      </div>
    </div>
  );
}
