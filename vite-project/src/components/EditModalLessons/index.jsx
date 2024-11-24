import style from "./EditModalLessons.module.css";
import { useState } from "react";

export function EditModalLessons({ setVisible, currentValues, trigger }) {
  const [formValues, setFormValues] = useState(currentValues); 

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar clase</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="name"> Instructor</label>
              <input type="text" id="name"></input>
            </div>
            <div className={style.form}>
              <label for="minAge"> Actividad</label>
              <input type="text" id="minAge"></input>
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.form}>
              <label for="shift"> Turno</label>
              <input type="text" id="shift"></input>
            </div>
            <div className={style.form}>
              <label for="capacity"> Capacidad</label>
              <input type="number" id="capacity"></input>
            </div>
          </div>
          <div className={style.saveCancel}>
            <button
              className={style.cancelEdit}
              onClick={() => {
                setVisibleLessons(false);
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
