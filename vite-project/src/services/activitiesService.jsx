
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

export const getActivity = async() => {
    try {
        const response = await fetch ("http://localhost:8080/activities/:id", {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 

    } catch (error) {
        console.log('Error obteniendo actividades', error)
    }
}

export const editActivity = async(editedActivity) => {
    try {
        const response = await fetch ("http://localhost:8080/activities/edit/:id", {
            method: "PUT",
            body: {
                editedActivity
            }
        }) 
        const data = await response.json();
        return data; 

    } catch (error) {
        console.log('Error obteniendo actividades', error)
    }
}