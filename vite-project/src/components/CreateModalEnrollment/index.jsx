import style from "./CreateModalEnrollment.module.css";
import { useState } from "react";
import { postEnrollment } from "../../services/EnrollmentsService";
import { useStudent } from "../../context/StudentContext";

export function CreateModalEnrollment({ setVisible, trigger, date, lesson_id }) {
  const [formValues, setFormValues] = useState([]);

  const {addEnrollment} = useStudent(); 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };
  
  const setEnrollment = async () => {
    try {
        await postEnrollment(formValues.ci, lesson_id, date, addEnrollment);
        setVisible(false); 
        trigger((prev) => prev +1)
    } catch (error) {
        console.error("Error añadiendo inscripción", error);
    }
  }
  
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Añadir inscripción</h1>
        <div className={style.editInfo}>
        <div className={style.formRow}>
            <div className={style.form}>
              <label for="ci"> CI del estudiante</label>
              <input 
                type="text" 
                id="ci"
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
            <button className={style.saveEdit} onClick={setEnrollment}>Agregar </button>
          </div>
        </div>
      </div>
    </div>
  );
}
