import { useState } from "react";
import style from "./Styles.module.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import { useUserType } from "../../context/UserTypeContext";

export function LogOutModal({ setVisibleLogOut }) {
  const { logOutType } = useUserType();
  const navigate = useNavigate();

  function closeModal() {
    setVisibleLogOut(false);
  }

  function closeSession(e) {
    e.preventDefault();

    logOutType();
    closeModal();
    navigate("/login");
  }

  return (
    <div className={style.modal}>
      <div className={style.editModal}>
        <div className={style.editTitle}>
          <h2 className="title is-4">Configuración</h2>
        </div>

        <div className={style.modalButtons}>
          <button
            type="button"
            id="save-button"
            className={style.cancel}
            onClick={closeModal}
          >
            Cancelar
          </button>
          <button
            type="button"
            id="save-button"
            className={style.save}
            onClick={closeSession}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}