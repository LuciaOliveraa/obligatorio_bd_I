export const getLessons = async() => {
    try {
        const response = await fetch (`http://localhost:8080/lessons`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error obteniendo clases', error)
    }
}

export const getLesson = async(id) => {
    try {
        const response = await fetch (`http://localhost:8080/lessons/${id}`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error obteniendo clase por id', error)
    }
}

export const getLessonByActivity = async(id) => {
    try {
        const response = await fetch (`http://localhost:8080/lessons/activity/${id}`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error obteniendo turno clase por actividad', error)
    }
}

export const editLesson = async(id, editedLesson) => {
    try {
        const response = await fetch (`http://localhost:8080/activities/edit/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedLesson)
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error editando clase', error)
    }
}

export const updateLesson = async(id, date) => {
    try {
        const response = await fetch (`http://localhost:8080/lessonTrack/update`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedLesson)
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error editando clase', error)
    }
}