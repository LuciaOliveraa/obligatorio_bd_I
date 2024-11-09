import "./style.css";
import { Navigate } from "react-router-dom";

export function SummaryInfo(props) {
  return (
    <div className="summaryBox">
      <div className="info">
        <p>
          {" "}
          <strong>Actividad: </strong> {props.actividad}
        </p>
        <p>
          {" "}
          <strong>Horario:</strong> {props.horario}
        </p>
        <p>
          {" "}
          <strong>Profesor:</strong> {props.instructor}
        </p>
        <p>
          {" "}
          <strong>Equipamiento:</strong> {props.equipamiento}
        </p>
      </div>
      <p className="costo"> Costo total: ${props.costoTotal}</p>
      <div className="botones">
        <button className="botonCancelarLogin"> cancelar </button>
        <button className="botonSiguienteLogin"> Siguiente </button>
      </div>
    </div>
  );
}
