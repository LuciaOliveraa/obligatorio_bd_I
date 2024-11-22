import { useState, useEffect } from "react";
import { getEquipmentByActivity } from "../services/equipmentService";

export default function useFetchEquipmentByActivity(activityId) {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!activityId) return;

    const fetchEquipment = async () => {
      try {
        const data = await getEquipmentByActivity(activityId);
        setEquipment(data || []);
      } catch (err) {
        setError("Error obteniendo equipos por actividad");
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, [activityId]);

  return { equipment, loading, error };
}
