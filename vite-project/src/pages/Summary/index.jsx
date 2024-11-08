import Navbar from "../../components/NavBar";
import "./style.css";

export default function Summary() {
  return (
    <div className="summary">
      <Navbar></Navbar>
      <div className="content">
        <h1 className="title is-1">Resumen de su inscripción</h1>
      </div>
    </div>
  );
}
