import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import { SummaryInfo } from "../../components/SummaryInfo";
import "./style.css";

export default function Summary({enrollment, rent}) {

  const [price, setPrice] = useState(0);
  const [equipment, setEquipment] = useState([]);

  const equipmentPrice = () => {
    let prices = 0;

    if (rent?.equipment?.length > 0) {
      for (const item of rent.equipment) {
        prices += Number(item.equipmentPrice);
        console.log("equipment price: ", item.equipmentPrice);
      }
    }

    prices = prices + Number(enrollment?.activityPrice);
    setPrice(prices);
  }

  const equipmentNames = () => {
    if (rent?.equipment?.length > 0) {
      for (const item of rent.equipment) {
        setEquipment([...equipment, item.name]);
      }
    } else {
      setEquipment(" - ");
    }
  } 

  useEffect(() => { 
    console.log("rent en summary: ", rent);
    equipmentNames();
    equipmentPrice();
  }, [])


  return (
    <div className="summary">
      <Navbar></Navbar>
      <div className="content">
        <h1 className="title is-1">Resumen de su inscripción</h1>
        <SummaryInfo
          actividad={enrollment?.activityName}
          horario={enrollment?.time}
          instructor={enrollment?.instructorName}
          equipamiento={equipment}
          costoTotal={price}
        />
      </div>
    </div>
  );
}
