import style from "./Style.module.css";
import Navbar from "../../components/NavBar";
import { GoTrash as Trash } from "react-icons/go";

export function UserPage({ user }) {
  return (
    <div>
      <Navbar></Navbar>
      <div className={style.pageContent}>
        <div className={style.box}>
          <p className={style.title}> Mis Datos</p>
          <div className={style.boxContent}>
            <div className={style.userData}>
              {Object.entries(user).map(([key, value]) =>
                key === "clase" ? null : (
                  <p key={key} className={style.userDataItem}>
                    <strong>{key}:</strong> {value}
                  </p>
                )
              )}
              {user?.clase && (
                <div className={style.userDataItem}>
                  <p>
                    <strong>Clases:</strong>
                  </p>
                  <div>
                    {user.clase.map((clase, index) => (
                      <div className={style.classItem}>
                        <p key={index}>{clase}</p>
                        <Trash className={style.trashIcon} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
