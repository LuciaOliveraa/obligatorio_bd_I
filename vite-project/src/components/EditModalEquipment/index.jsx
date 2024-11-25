import style from "./EditModalEquipment.module.css";
import { useState } from "react";
import { useModifyEquipment } from "../hooks/useModifyEquipment";

export function EditModalEquipment({ setVisible, currentValues }) {
  const [formValues, setFormValues] = useState(currentValues);
  const { modifyEquipment, loading, error, success } = useModifyEquipment();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const setEquipment = async () => {
    try {
      const updatedEquipment = {
        name: formValues.name,
        price: Number(formValues.price),
        description: formValues.description,
      };
      await modifyEquipment(formValues.id, updatedEquipment);
      setVisible(false); 
    } catch (error) {
      console.error("Error editando el equipo", error);
    }
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h1 className={style.title}> Editar equipo</h1>
        <div className={style.editInfo}>
          <div className={style.formRow}>
            <div className={style.form}>
              <label htmlFor="name"> Nombre</label>
              <input
                type="text"
                id="name"
                defaultValue={formValues.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={style.form}>
              <label htmlFor="price"> Precio</label>
              <input
                type="number"
                id="price"
                defaultValue={formValues.price}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={style.formRow}>
            <div className={style.form}>
              <label htmlFor="description"> Descripción</label>
              <input
                type="text"
                id="description"
                defaultValue={formValues.description}
                onChange={handleInputChange}
              />
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
            <button
              className={style.saveEdit}
              onClick={setEquipment}
              disabled={loading} 
            >
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
