import "./style.css";

export function ScheduleItem(props) {
  return (
    <div className="boxHorario">
      <h1> {props.nombreHorario}</h1>
      <div className="infoSummary">
        <p>
          <strong>Instructor: </strong> {props.instructor}
        </p>
        <p>
          <strong>Modalidad: </strong> {props.modalidad}
        </p>
        <p>
          <strong>Horario: </strong> {props.horario}
        </p>
      </div>
    </div>
  );
}
