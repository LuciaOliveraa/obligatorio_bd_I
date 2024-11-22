
export const getAllEquipment = async () => {
    try {
        const response = await fetch("http://localhost:8080/equipment", {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error obteniendo todos los equipos", error);
    }
};

export const getEquipmentByActivity = async (activityId) => {
    try {
        const response = await fetch(`http://localhost:8080/equipment/activity/${activityId}`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error obteniendo equipos por actividad", error);
    }
};

export const getEquipment = async (id) => {
    try {
        const response = await fetch(`http://localhost:8080/equipment/${id}`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error obteniendo equipo por ID", error);
    }
};

export const editEquipment = async (id, updatedEquipment) => {
    try {
        const response = await fetch(`http://localhost:8080/equipment/edit/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedEquipment)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error editando equipo", error);
    }
};
