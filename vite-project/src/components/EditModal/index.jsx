import style from "./EditModal.module.css";

export function EditModal() {
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
              <label for="surname"> Apellido</label>
              <input type="text" id="surname"></input>
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.form}>
              <label for="cedIdentidad"> Email</label>
              <input type="email" id="cedIdentidad"></input>
            </div>
            <div className={style.form}>
              <label for="bornDate"> Telefono</label>
              <input type="numer" id="bornDate"></input>
            </div>
          </div>
          <div className={style.saveCancel}>
            <button className={style.cancelEdit}>Cancelar </button>
            <button className={style.saveEdit}>Guardar cambios </button>
          </div>
        </div>
      </div>
    </div>
  );
}
