import Navbar from "../../components/NavBar";
import { ScheduleItem } from "../../components/ScheduleItem";
import "./style.css";
import { useState } from "react";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

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
