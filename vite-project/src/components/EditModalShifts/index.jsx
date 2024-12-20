import style from "./EditModalShifts.module.css";
import { editShift } from "../../services/shiftsService";
import { useState } from "react";


const formatTime = (time) => {
  const [hours, minutes] = time.split(":");
  const normalizedHours = hours.padStart(2, "0");
  return `${normalizedHours}:${minutes}`;
};

export function EditModalShifts({ setVisible, currentValues, trigger }) {
  const [formValues, setFormValues] = useState({
    ...currentValues,
    startsAt: formatTime(currentValues.startsAt.slice(0, 5)), 
    endsAt: formatTime(currentValues.endsAt.slice(0, 5)),
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const formattedValue = formatTime(value); 
    setFormValues({
      ...formValues,
      [id]: formattedValue,
    });
  };
  
  const setShift = async () => {
    try {
      const formattedStart = `${formValues.startsAt}:00`; // Recorta a HH:mm
      const formattedEnd =  `${formValues.endsAt}:00`;

      const newShift = {
        starting_time: formattedStart,
        end_time: formattedEnd,
      }
      await editShift(formValues.id, newShift);
      console.log(newShift)
      setVisible(false); 
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error editando turno", error);
    }
  }
  
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar turno</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="start"> Horario inicio</label>
              <input  
                type="time" 
                id="startsAt" 
                defaultValue={formValues.startsAt}
                onChange={handleInputChange} 
              />
            </div>
            <div className={style.form}>
              <label for="end"> Horario fin</label>
              <input  
                type="time" 
                id="endsAt" 
                defaultValue={formValues.endsAt} 
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
            <button className={style.saveEdit} onClick={setShift}>Guardar cambios </button>
          </div>
        </div>
      </div>
    </div>
  );
}
