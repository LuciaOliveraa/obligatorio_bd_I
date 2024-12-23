import style from "./EditModalInstructors.module.css";
import { useState } from "react";
import { editInstructor } from "../../services/instructorsService";

export function EditModalInstructors({ setVisible, currentValues, trigger }) {
  const [formValues, setFormValues] = useState(currentValues);

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
      };
      await editInstructor(formValues.ci, newInstructor);
      console.log(newInstructor);
      setVisible(false);
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error editando instructor", error);
    }
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar instructor</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="name"> Nombre</label>
              <input 
                type="text" 
                id="name"
                onChange={handleInputChange}
                defaultValue={formValues.name}
              />
            </div>
            <div className={style.form}>
              <label for="surname"> Apellido</label>
              <input 
                type="text" 
                id="lastname"
                onChange={handleInputChange}
                defaultValue={formValues.lastname}
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
                defaultValue={formValues.ci}
                disabled
              />
            </div>
            <div className={style.form}>
              <label for="surname"> Email</label>
              <input 
                type="text" 
                id="email"
                onChange={handleInputChange}
                defaultValue={formValues.email}
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
            <button className={style.saveEdit} onClick={setInstructor}>Guardar cambios </button>
          </div>
        </div>
      </div>
    </div>
  );
}
