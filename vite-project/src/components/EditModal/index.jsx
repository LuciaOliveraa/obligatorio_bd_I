import style from "./EditModal.module.css";

export function EditModal() {
  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar alumno</h1>
      </div>
    </div>
  );
}
