import style from "./EditModalActivities.module.css";
import { useState } from "react";

export function EditModalActivities({ setVisible, currentValues }) {
  const [formValues, setFormValues] = useState(currentValues); 

  const handleInputChange = (e) => {
    const {id,value} = e.target; 
    setFormValues({
      ...formValues,
      [id]:value, 
    })
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
                value={formValues.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.form}>
              <label for="minAge"> Edad mín</label>
              <input 
                type="number" 
                id="minAge"
                value={formValues.ageMin}
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
                value={formValues.price}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.form}>
              <label for="description"> Descripción</label>
              <input 
                type="text" 
                id="description"
                value={formValues.description}
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
            <button className={style.saveEdit}>Guardar cambios </button>
          </div>
        </div>
      </div>
    </div>
  );
}
