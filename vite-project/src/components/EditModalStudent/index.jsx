import style from "./EditModalStudent.module.css";
import { editStudent } from "../../services/studentsService";
import { useState } from "react";

export function EditModalStudent({ setVisible, currentValues, trigger }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0]; //devuelve solo 'YYYY-MM-DD'
  };

  const [formValues, setFormValues] = useState({
    ...currentValues,
    birthdate: formatDate(currentValues.birthdate),
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const setStudent = async () => {
    try {
      const newStudent = {
        name: formValues.name,
        lastname: formValues.lastname,
        birthdate: formValues.birthdate,
        phone_number: Number(formValues.phone_number),
      };
      await editStudent(formValues.ci, newStudent);
      console.log(newStudent);
      setVisible(false);
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error editando alumno", error);
    }
  };

  return (
    <>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <h1 className={style.title}> Editar alumno</h1>
          <div className={style.editInfo}>
            <div className={style.formRow}>
              <div className={style.form}>
                <label for="name"> Nombre</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleInputChange}
                  defaultValue={formValues.name}
                ></input>
              </div>
              <div className={style.form}>
                <label for="lastname"> Apellido</label>
                <input
                  type="text"
                  id="lastname"
                  defaultValue={formValues.lastname}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className={style.formRow}>
              <div className={style.form}>
                <label for="ci"> CI</label>
                <input
                  type="text"
                  id="cedIdentidad"
                  defaultValue={formValues.ci}
                  onChange={handleInputChange}
                  disabled
                ></input>
              </div>
              <div className={style.form}>
                <label for="birthdate"> Fecha de nacimiento</label>
                <input
                  type="date"
                  id="birthdate"
                  defaultValue={formValues.birthdate}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className={style.formRow}>
              <div className={style.form}>
                <label for="email"> Email</label>
                <input
                  type="email"
                  id="email"
                  defaultValue={formValues.email}
                  onChange={handleInputChange}
                  disabled
                ></input>
              </div>
              <div className={style.form}>
                <label for="phone_number"> Telefono</label>
                <input
                  type="text"
                  id="phone_number"
                  defaultValue={formValues.phone_number}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className={style.saveCancel}>
              <button
                className={style.cancelEdit}
                onClick={() => {
                  setVisible(false);
                }}
              >
                Cancelar{" "}
              </button>
              <button className={style.saveEdit} onClick={setStudent}>Guardar cambios </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
