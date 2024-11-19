
export const getActivities = async () => {
    try {
        const response = await fetch ("http://localhost:8080/activities", {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 

    } catch (error) {
        console.log('Error obteniendo actividades', error)
    }
}

export const getActivity = async(id) => {
    try {
        const response = await fetch (`http://localhost:8080/activities/${id}`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 

    } catch (error) {
        console.log('Error obteniendo actividad por id', error)
    }
}

export const editActivity = async(id, editedActivity) => {
    try {
        const response = await fetch (`http://localhost:8080/activities/edit/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedActivity)
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error editando actividad', error)
    }
}