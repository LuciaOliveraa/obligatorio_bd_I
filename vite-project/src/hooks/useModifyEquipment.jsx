import { useState } from "react";
import { editEquipment } from "../services/equipmentService";

export function useModifyEquipment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const modifyEquipment = async (id, updatedEquipment) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await editEquipment(id, updatedEquipment);
      setSuccess(true);
    } catch (err) {
      setError("Error editando equipo");
    } finally {
      setLoading(false);
    }
  };

  return { modifyEquipment, loading, error, success };
}
