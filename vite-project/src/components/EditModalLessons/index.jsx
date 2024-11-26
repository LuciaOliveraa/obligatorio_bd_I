import style from "./EditModalLessons.module.css";
import { useState } from "react";
import { editLesson } from "../../services/lessonsService";

export function EditModalLessons({ setVisible, currentValues, trigger }) {
  const [formValues, setFormValues] = useState(currentValues); 

  const handleInputChange = (e) => {
    const {id,value} = e.target; 
    setFormValues({
      ...formValues,
      [id]: value, 
    })
  }

  const setLesson = async () => {
    try {
      const newLesson = {
        activity_id: Number(formValues.activityId),
        capacity: Number(formValues.capacity), 
        instructor_ci: Number(formValues.instructorId), 
        shift_id: Number(formValues.shiftId), 
      };
      await editLesson(formValues.id, newLesson);
      console.log("edited lesson", newLesson);
      setVisible(false);
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error editando clase", error);
    }
  };


  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar clase</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="instructorId"> ID instructor</label>
              <input 
                type="text" 
                id="instructorId"
                defaultValue={formValues.instructorId}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.form}>
              <label for="activityId"> ID actividad</label>
              <input 
                type="text" 
                id="activityId"
                defaultValue={formValues.activityId}
                onChange={handleInputChange}
                disabled
              />
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.form}>
              <label for="shiftId"> ID turno</label>
              <input 
                type="text" 
                id="shiftId"
                defaultValue={formValues.shiftId}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.form}>
              <label for="capacity"> Capacidad</label>
              <input 
                type="number" 
                id="capacity"
                defaultValue={formValues.capacity}
                onChange={handleInputChange}
                disabled
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
            <button className={style.saveEdit} onClick={setLesson}>Guardar cambios </button>
          </div>
        </div>
      </div>
    </div>
  );
}
