import Navbar from "../../components/NavBar";
import { ScheduleItem } from "../../components/ScheduleItem";
import "./style.css";

export default function Schedule() {
  return (
    <div className="schedule">
      <Navbar />
      <div className="content">
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
