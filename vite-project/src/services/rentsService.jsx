export const postRent = async (id, date, equipment_id, addRent) => {
    const en = {
        equipment_id: equipment_id,
        date: date
    }

    try {
        const response = await fetch (`http://localhost:8080/rents/new/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(en)
        }) 
        const data = await response.json();

        const rent = {
            student_ci: id,
            equipment_id: equipment_id,
            date: date
        }

        addRent(rent);

        console.log("post rent response: ", data);
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
        const response = await fetch (`http://localhost:8080/rents/delete/${id}`, {
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