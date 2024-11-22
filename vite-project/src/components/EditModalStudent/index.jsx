import style from "./EditModalStudent.module.css";

export function EditModalStudent({ setVisible, currentValues }) {
  const [formValues, setFormValues] = useState(currentValues);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  //ci, email, name, lastname, birthdate, phone_number

  const setStudent = async () => {
    try {
      const newStudent = {
        ci: Number(formValues.ci),
        name: formValues.name,
        lastName: formValues.lastname,
        name: formValues.name,
        price: Number(formValues.price),
      };
      await editActivity(formValues.id, newActivity);
      console.log(newActivity);
      setVisible(false);
    } catch (error) {
      console.error("Error editando la actividad", error);
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
                <label for="surname"> Apellido</label>
                <input
                  type="text"
                  id="surname"
                  defaultValue={formValues.lastname}
                  onChange={handleInputChange}
                ></input>
              </div>
            </div>
            <div className={style.formRow}>
              <div className={style.form}>
                <label for="cedIdentidad"> Email</label>
                <input
                  type="email"
                  id="cedIdentidad"
                  defaultValue={formValues.email}
                  onChange={handleInputChange}
                ></input>
              </div>
              <div className={style.form}>
                <label for="bornDate"> Telefono</label>
                <input
                  type="numer"
                  id="bornDate"
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
              <button className={style.saveEdit}>Guardar cambios </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
