import style from "./CreateModalShifts.module.css";
import { addShift } from "../../services/shiftsService";
import { useState } from "react";

export function CreateModalShifts({ setVisible, trigger }) {
  const [formValues, setFormValues] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };
  
  const setShift = async () => {
    try {
      const newShift = {
        starting_time: `${formValues.startsAt}:00`,
        end_time: `${formValues.endsAt}:00`,
        name: formValues.name, 
      }
      
      await addShift(newShift);
      console.log(newShift)
      setVisible(false); 
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error añadiendo turno", error);
    }
  }
  
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Añadir turno</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="start"> Horario inicio</label>
              <input  
                type="time" 
                id="startsAt" 
                onChange={handleInputChange} 
              />
            </div>
            <div className={style.form}>
              <label for="end"> Horario fin</label>
              <input  
                type="time" 
                id="endsAt" 
                onChange={handleInputChange} 
              />
            </div>
          </div>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="start"> Nombre</label>
              <input  
                type="text" 
                id="name" 
                onChange={handleInputChange} 
              />
            </div>
            
          </div>
          <div className={style.saveCancel}>
            <button
              className={style.cancelEdit}
              onClick={() => {
                setVisible(false);
              }}
            >
              Cancelar{" "}
            </button>
            <button className={style.saveEdit} onClick={setShift}>Agregar </button>
          </div>
        </div>
      </div>
    </div>
  );
}
