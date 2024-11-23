export const getShifts = async() => {
    try {
        const response = await fetch (`http://localhost:8080/shifts`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error obteniendo turnos', error)
    }
}

export const getShift = async(id) => {
    try {
        const response = await fetch (`http://localhost:8080/shifts/${id}`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 

    } catch (error) {
        console.log('Error obteniendo turno por id', error)
    }
}

export const addShift = async(newShift) => {
    try {
        const response = await fetch (`http://localhost:8080/shifts/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newShift)
        }) 
        const data = await response.json();
        return data; 

    } catch (error) {
        console.log('Error añadiendo nuevo turno', error)
    }
}

export const deleteShift = async(id) => {
    try {
        const response = await fetch (`http://localhost:8080/shifts/delete/${id}`, {
            method: "DELETE"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error eliminando turno', error)
    }
}

export const editShift = async(id, editedShift) => {
    try {
        const response = await fetch (`http://localhost:8080/shifts/edit/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedShift)
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error editando turno', error)
    }
}
