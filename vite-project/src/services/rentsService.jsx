export const postRent = async (id, date, equipment_id, addRent) => {
    const en = {
        equipment_id: equipment_id,
        date: date
    }

    try {
        const response = await fetch (`http://localhost:8080/enrollments/delete/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(en)
        }) 
        const data = await response.json();

        addRent(rent);
        return data; 
    } catch (error) {
        console.log('Error añadiendo renta', error)
    }
}


export const deleteRent = async (id, rent, removeRent) => {
    const en = {
        equipment_id: rent.equipment_id,
        date: rent.date
    }

    try {
        const response = await fetch (`http://localhost:8080/enrollments/delete/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(en)
        }) 
        const data = await response.json();

        removeRent(rent);
        return data; 
    } catch (error) {
        console.log('Error eliminando renta', error)
    }
}