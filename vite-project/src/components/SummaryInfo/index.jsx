import "./style.css";
import { Navigate } from "react-router-dom";

export function SummaryInfo(props ) {

  return (
    <div className="summaryBox">
      <div className="info">
        <p className="text">
          {" "}
          <strong>Actividad: </strong> {props?.actividad}
        </p>
        <p className="text">
          {" "}
          <strong>Horario:</strong> {props?.horario}
        </p>
        <p className="text">
          {" "}
          <strong>Profesor:</strong> {props?.instructor}
        </p>
        <p className="text">
          {" "}
          <strong>Equipamiento:</strong> {props?.equipamiento}
        </p>
      </div>
      <p className="costo"> Costo total: ${props?.costoTotal}</p>
      <div className="botones">
        <button className="botonCancelarLogin"> Cancelar </button>
        <button className="botonSiguienteLogin"> Confirmar inscripción </button>
      </div>
    </div>
  );
}
