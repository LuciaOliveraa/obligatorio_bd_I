import { useState, useEffect } from "react";
import { getEquipment } from "../services/equipmentService";

export function useFetchEquipment(id) {
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchEquipment = async () => {
      try {
        const data = await getEquipment(id);
        setEquipment(data || null);
      } catch (err) {
        setError("Error obteniendo equipo por ID");
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [id]);

  return { equipment, loading, error };
}
