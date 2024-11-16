import style from "./EditModalShifts.module.css";

export function EditModalShifts({ setVisibleShifts }) {
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar turno</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label for="start"> Horario inicio</label>
              <input type="time" id="start"></input>
            </div>
            <div className={style.form}>
              <label for="end"> Horario fin</label>
              <input type="time" id="end"></input>
            </div>
          </div>
          <div className={style.saveCancel}>
            <button
              className={style.cancelEdit}
              onClick={() => {
                setVisibleShifts(false);
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
