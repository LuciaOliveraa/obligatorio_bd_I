import Navbar from "../../components/NavBar";
import EquipmentContainer from "../../components/EquipmentContainer";
import './Equipment.css'
import { MdNavigateNext as Next} from "react-icons/md";
import { useParams } from "react-router-dom";
import useFetchEquipmentByActivity from '../../hooks/useFetchEquipmentByActivity'

export default function Equipment() {
  const { activityId } = useParams();  
  const { equipment, loading, error } = useFetchEquipmentByActivity(activityId);

  if (loading) return <p>Cargando equipos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="equipmentPage">
      <Navbar></Navbar>
      <div className="equipment-container">
        <h1 className="title is-3">Seleccione el equipamiento</h1>
        <div className="button-div">
          <button className="button next-button">Siguiente<Next className="next"></Next></button>
        </div>
        <EquipmentContainer equipment={equipment}/>
      </div>
    </div>
  );
}
