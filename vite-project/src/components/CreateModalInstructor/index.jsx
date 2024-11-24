import style from "./CreateModalInstructor.module.css";
import { addInstructor } from "../../services/instructorsService";
import { useState } from "react";

export function CreateModalInstructor({ setVisible, trigger }) {
  const [formValues, setFormValues] = useState([]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };
  
  const setInstructor = async () => {
    try {
        const newInstructor = {
            name: formValues.name,
            lastname: formValues.lastname,
            email: formValues.email,
            ci: Number(formValues.ci), 
        }
        await addInstructor(newInstructor);
        console.log("nuevo ins", newInstructor)
        setVisible(false); 
        trigger((prev) => prev +1)
    } catch (error) {
        console.error("Error añadiendo instructor", error);
    }
  }
  
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Añadir instructor</h1>
        <div className={style.editInfo}>
        <div className={style.formRow}>
            <div className={style.form}>
              <label for="name"> Nombre</label>
              <input 
                type="text" 
                id="name"
                onChange={handleInputChange}
              />
            </div>
            <div className={style.form}>
              <label for="surname"> Apellido</label>
              <input 
                type="text" 
                id="lastname"
                onChange={handleInputChange}
              />
            </div>
        </div>
        <div className={style.formRow}>
            <div className={style.form}>
              <label for="name"> CI</label>
              <input 
                type="text" 
                id="ci"
                onChange={handleInputChange}
              />
            </div>
            <div className={style.form}>
              <label for="surname"> Email</label>
              <input 
                type="text" 
                id="email"
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
            <button className={style.saveEdit} onClick={setInstructor}>Agregar </button>
          </div>
        </div>
      </div>
    </div>
  );
}
