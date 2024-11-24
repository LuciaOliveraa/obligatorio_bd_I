import style from "./Shifts.module.css";
import Shift from "../Shift";
import { IoMdAdd as Add } from "react-icons/io";
import { getShifts } from "../../services/shiftsService";
import { useState, useEffect } from "react";
import { CreateModalShifts } from "../CreateModalShift";

export default function Shifts() {
  const [shifts, setShifts] = useState([]); 
  const [trigger, setTrigger] = useState(0); 
  const [addModalVisible, setAddModalVisible] = useState(false); 

  const fetchShifts = async () => {
    try {
      const data = await getShifts();
      setShifts(data); 
      console.log("shifts", data)
    } catch (error) {
      console.error("Error obteniendo turnos", error);
    }
  };

  useEffect(() => {
    fetchShifts();
  }, [trigger]);
  
  
  return (
    <div>
      <div className={style.shiftsAndAdd}>
        <p className={style.shiftsTitle}>Turnos</p>
        <button className={style.addButton} onClick={() => {
            setAddModalVisible(true);
          }}>
          <Add className={style.add}></Add>{" "}
        </button>
      </div>
      <div className={style.allShifts}>
        {shifts.map((shift) => (
          <Shift 
            key={shift.id}
            id={shift.id}
            startsAt = {shift.starting_time}
            endsAt = {shift.end_time}
            trigger = {setTrigger}
          />
        ))}
      </div>
      { addModalVisible && <CreateModalShifts setVisible={setAddModalVisible} trigger={setTrigger}/>}

    </div>
  );
}
