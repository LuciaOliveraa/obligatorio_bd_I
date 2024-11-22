import style from "./Student.module.css";
import { TbPencil as Pencil } from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";
import { EditModalStudent } from "../EditModalStudent";
import { useState } from "react";

export default function Student({
  ci,
  email,
  name,
  lastname,
  birthdate,
  phone_number,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <div className={style.infoandbuttons}>
      <div className={style.info}>
        <span>
          <strong>CI: </strong>
          {ci}
        </span>
        <span>
          <strong>Nombre: </strong>
          {name} {lastname}
        </span>
        <span>
          <strong>Email: </strong>
          {email}
        </span>
      </div>
      <div className="buttons">
        <button className={style.deletebutton}>
          <Trash className={style.trash}></Trash>
        </button>
        <button
          className={style.editbutton}
          onClick={() => {
            setVisible(true);
          }}
        >
          <Pencil className={style.pencil}></Pencil>
        </button>
      </div>
      {modalVisible && (
        <EditModalStudent
          setModalVisible={setModalVisible}
          values={[ci, email, name, lastname, birthdate, phone_number]}
        />
      )}
    </div>
  );
}
