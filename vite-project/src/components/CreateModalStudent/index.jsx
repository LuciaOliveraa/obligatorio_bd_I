import style from "./CreateModalStudents.module.css";
import { addStudent } from "../../services/studentsService";
import { useState } from "react";

export function CreateModalStudent({ setVisible, trigger }) {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const validateForm = () => {
    const { ci, name, lastname, email, birthdate, phone_number } = formValues;
    if (!ci || !name || !lastname || !email || !birthdate || !phone_number) {
      alert("Por favor, completa todos los campos.");
      return false;
    }
    return true;
  };
  
  const newStudent = async () => {
    if (!validateForm()) return; 

    try {
      const newStudent = {
        ci: Number(formValues.ci),
        name: formValues.name,
        lastname: formValues.lastname,
        email: formValues.email,
        birthdate: formValues.birthdate,
        phone_number: Number(formValues.phone_number),
      };
      await addStudent(newStudent);
      console.log(newStudent);
      setVisible(false);
      trigger((prev) => prev +1)
    } catch (error) {
      console.error("Error añadiendo alumno", error);
    }
  };

  return (
    <>
      <div className={style.modal}>
        <div className={style.modalContent}>
          <h1 className={style.title}> Añadir alumno</h1>
          <div className={style.editInfo}>
            <div className={style.formRow}>
              <div className={style.form}>
                <label for="name"> Nombre</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className={style.form}>
                <label for="lastname"> Apellido</label>
                <input
                  type="text"
                  id="lastname"
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className={style.formRow}>
              <div className={style.form}>
                <label for="ci"> CI</label>
                <input
                  type="text"
                  id="ci"
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className={style.form}>
                <label for="birthdate"> Fecha de nacimiento</label>
                <input
                  type="date"
                  id="birthdate"
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
                  onChange={handleInputChange}
                
                ></input>
              </div>
              <div className={style.form}>
                <label for="phone_number"> Telefono</label>
                <input
                  type="text"
                  id="phone_number"
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
              <button className={style.saveEdit} onClick={newStudent}>Agregar </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
