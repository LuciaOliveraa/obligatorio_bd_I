import Navbar from "../../components/NavBar";
import { SummaryInfo } from "../../components/SummaryInfo";
import "./style.css";

export default function Summary() {
  return (
    <div className="summary">
      <Navbar></Navbar>
      <div className="content">
        <h1 className="title is-1">Resumen de su inscripción</h1>
        <SummaryInfo
          actividad="Snowboarding"
          horario="9:00 a 11:00"
          profesor="Sergio"
          equipamiento="Cascos, Lentes"
          costoTotal="2500"
        />
      </div>
    </div>
  );
}
