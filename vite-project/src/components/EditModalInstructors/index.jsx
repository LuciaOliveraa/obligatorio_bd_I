import style from "./EditModalInstructors.module.css";

export function EditModalInstructors({ setVisibleInstructors }) {
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar instructor</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="name"> Nombre</label>
              <input type="text" id="name"></input>
            </div>
            <div className={style.form}>
              <label for="surname"> Apellido</label>
              <input type="text" id="surname"></input>
            </div>
          </div>
          <div className={style.saveCancel}>
            <button
              className={style.cancelEdit}
              onClick={() => {
                setVisibleInstructors(false);
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
