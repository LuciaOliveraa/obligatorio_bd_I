import Navbar from "../../components/NavBar";
import "./HomePage.css";
import SportCard from "../../components/SportCard";
import SportsContainer from "../../components/SportsContainer";
import { useUserType } from "../../context/UserTypeContext";

export default function HomePage({setEnrollment, enrollment}) {
  // const [enrollment, setEnrollment] = useState({}); 
  // const [rent, setRent] = useState({}); 
  const { userType } = useUserType();

  return (
    <div className="homePage">
      <Navbar></Navbar>
      <div className="home-container">
        <h1 className="title is-2">Actividades 2024</h1>
        { userType == 'student' && <p className="selection-p">Seleccione una actividad</p>}
        <SportsContainer 
          setEnrollment={setEnrollment} 
          enrollment={enrollment} 
        />
      </div>
    </div>
  );
}
