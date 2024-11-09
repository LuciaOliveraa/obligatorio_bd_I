import Navbar from "../../components/NavBar";
import EquipmentContainer from "../../components/EquipmentContainer";
import './Equipment.css'
import { MdNavigateNext as Next} from "react-icons/md";


export default function Equipment() {
  return (
    <div className="equipmentPage">
      <Navbar></Navbar>
      <div className="equipment-container">
        <h1 className="title is-3">Seleccione el equipamiento</h1>
        <div className="button-div">
          <button className="button next-button">Siguiente<Next className="next"></Next></button>
        </div>
        <EquipmentContainer></EquipmentContainer>
      </div>
    </div>
  );
}
