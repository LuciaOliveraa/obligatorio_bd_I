import style from "./EditModalActivities.module.css";

export function EditModalActivities({ setVisibleActivities }) {
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar alumno</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="name"> Nombre</label>
              <input type="text" id="name"></input>
            </div>
            <div className={style.form}>
              <label for="minAge"> Edad mín</label>
              <input type="text" id="minAge"></input>
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.form}>
              <label for="price"> Precio</label>
              <input type="email" id="price"></input>
            </div>
            <div className={style.form}>
              <label for="description"> Descripción</label>
              <input type="numer" id="description"></input>
            </div>
          </div>
          <div className={style.saveCancel}>
            <button
              className={style.cancelEdit}
              onClick={() => {
                setVisibleActivities(false);
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
