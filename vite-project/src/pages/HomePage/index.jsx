import Navbar from "../../components/NavBar";
import "./HomePage.css";
import SportCard from "../../components/SportCard";
import SportsContainer from "../../components/SportsContainer";

export default function HomePage({setRent, setEnrollment, rent, enrollment}) {
  // const [enrollment, setEnrollment] = useState({}); 
  // const [rent, setRent] = useState({}); 

  return (
    <div className="homePage">
      <Navbar></Navbar>
      <div className="home-container">
        <h1 className="title is-2">Actividades 2024</h1>
        <p className="selection-p">Seleccione una actividad</p>
        <SportsContainer />
      </div>
    </div>
  );
}
