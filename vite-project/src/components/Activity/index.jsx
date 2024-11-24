import style from "./Activity.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { EditModalActivities } from "../EditModalActivities";
import { useState } from "react";

export default function Activity({ id, name, description, ageMin, price, trigger }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className={style.infoandbuttons}>
      <div className={style.info}>
        <span>
          <strong>ID: </strong>
          {id}
        </span>
        <span>
          <strong>Actividad: </strong>
          {name}
        </span>
        <span>
          <strong>Mínimo de edad: </strong>
          {ageMin}
        </span>
        <span>
          <strong>Costo: </strong>
          {price}
        </span>
      </div>
      <div className="buttons">
        <button
          className={style.editbutton}
          onClick={() => {
            setModalVisible(true);
          }}
        >
          <Pencil className={style.pencil}></Pencil>
        </button>
      </div>
      {modalVisible && (
        <EditModalActivities
          setVisible={setModalVisible}
          currentValues={{ name, description, ageMin, price, id }}
          trigger = {trigger}
        />
      )}
    </div>
  );
}
