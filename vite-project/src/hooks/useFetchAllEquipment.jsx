import { useState, useEffect } from "react";
import { getAllEquipment } from "../services/equipmentService";

export function useFetchAllEquipment() {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEquipment = async () => {
    try {
      const data = await getAllEquipment();
      setEquipment(data || []); // data undefined si ocurre un error
    } catch (err) {
      setError("Error obteniendo equipos");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchEquipment();
  }, []);

  return { equipment, loading, error };
}
