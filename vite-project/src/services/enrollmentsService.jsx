
export const getEnrollments = async() => {
    try {
        const response = await fetch (`http://localhost:8080/enrollments`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error obteniendo inscripciones', error)
    }
}

// export const addEnrollment = async(newEnrollment) => {
//     try {
//         const response = await fetch (`http://localhost:8080/enrollments/add`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(newEnrollment)
//         }) 
//         const data = await response.json();
//         return data; 

//     } catch (error) {
//         console.log('Error en la inscripción', error)
//     }
// }

export const deleteEnrollment = async(id) => {
    try {
        const response = await fetch (`http://localhost:8080/enrollments/delete/${id}`, {
            method: "DELETE"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error eliminando inscripción', error)
    }
}


