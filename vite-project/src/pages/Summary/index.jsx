import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import { SummaryInfo } from "../../components/SummaryInfo";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";
import { getLessonByActivity, getLessonId } from "../../services/lessonsService";

export default function Summary({enrollment, rent, setEnrollment, setRent}) {
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  const [equipment, setEquipment] = useState("");

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
    let names = "";
    if (rent?.equipment?.length > 0) {
      for (const item of rent.equipment) {
        names += item.name + ", ";
        console.log("equipment name: ", item.name);
      }
      setEquipment(names);
    } else {
      setEquipment(" - ");
    }
  } 

  useEffect(() => { 
    console.log("rent en summary: ", rent);
    equipmentNames();
    equipmentPrice();
  }, [])

  const handleCancel = () => {
    setEnrollment({});
    setRent({});

    navigate("/home");
  }

  const findLesson = async () => {
    const activity_id = enrollment.activityId;
    const shift_id = enrollment.shift.id;
    const lessonId = await getLessonId()

    return lessonId;
  }

  const handleInscription = () => {

  }

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

          cancel={handleCancel}
          inscription={handleInscription}
        />
      </div>
    </div>
  );
}
