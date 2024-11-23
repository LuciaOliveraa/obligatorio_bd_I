import style from "./EditModalActivities.module.css";
import { useState } from "react";
import { editActivity } from "../../services/activitiesService";

export function EditModalActivities({ setVisible, currentValues, trigger }) {
  const [formValues, setFormValues] = useState(currentValues); 

  const handleInputChange = (e) => {
    const {id,value} = e.target; 
    setFormValues({
      ...formValues,
      [id]:value, 
    })
  }
  
  const setActivity = async () => {
    try {
      const newActivity = {
        age_min: Number(formValues.ageMin),
        description: formValues.description,
        name: formValues.name,
        price: Number(formValues.price),
      }
      await editActivity(formValues.id, newActivity);
      console.log(newActivity)
      setVisible(false); 
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error editando la actividad", error);
    }
  }
  
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar actividad</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="name"> Nombre</label>
              <input 
                type="text" 
                id="name"
                defaultValue={formValues.name}
                onChange={handleInputChange}
                disabled
              />
            </div>
            <div className={style.form}>
              <label for="minAge"> Edad mín</label>
              <input 
                type="number" 
                id="ageMin"
                defaultValue={formValues.ageMin}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.form}>
              <label for="price"> Precio</label>
              <input 
                type="number" 
                id="price"
                defaultValue ={formValues.price}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.form}>
              <label for="description"> Descripción</label>
              <input 
                type = "text" 
                id = "description"
                defaultValue ={formValues.description}
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
            <button className={style.saveEdit} onClick={setActivity}>Guardar cambios </button>
          </div>
        </div>
      </div>
    </div>
  );
}
