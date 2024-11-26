import style from "./CreateModalEnrollment.module.css";
import { addInstructor } from "../../services/instructorsService";
import { useState } from "react";

export function CreateModalEnrollment({ setVisible, trigger, date, lesson_id }) {
  const [formValues, setFormValues] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };
  
//   const setInstructor = async () => {
//     try {
//         const newInstructor = {
//             name: formValues.name,
//             lastname: formValues.lastname,
//             email: formValues.email,
//             ci: Number(formValues.ci), 
//         }
//         await addInstructor(newInstructor);
//         console.log("nuevo ins", newInstructor)
//         setVisible(false); 
//         trigger((prev) => prev +1)
//     } catch (error) {
//         console.error("Error añadiendo instructor", error);
//     }
//   }
  
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
            <button className={style.saveEdit} >Agregar </button>
          </div>
        </div>
      </div>
    </div>
  );
}
