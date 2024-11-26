
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

export const getStudentEnrollments = async (studentId) => {
    try {
        const response = await fetch(`http://localhost:8080/enrollments/${studentId}`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error obteniendo inscripciones del estudiante", error);
    }
};

export const getEnrollmentsByLessonDate = async (lessonId, date) => {
    try {
        const response = await fetch(`http://localhost:8080/enrollments/${lessonId}/${date}`, {
            method: "GET"
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error obteniendo inscripciones por lección y fecha", error);
    }
};


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

export const postEnrollment = async (student_ci, lesson_id, date, addEnrollment) => {
    const en = {
        lesson_id: lesson_id,
        date: date
    }

    try {
        const response = await fetch (`http://localhost:8080/enrollments/new/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(en)
        }) 
        const data = await response.json();

        const enrollment = {
            student_ci: student_ci,
            lesson_id: lesson_id,
            date: date
        }

        addEnrollment(enrollment);
        return data; 
    } catch (error) {
        console.log('Error eliminando inscripción', error)
    }

}


export const deleteEnrollment = async(id, enrollment, removeEnrollment) => {
    const en = {
        lesson_id: enrollment.lesson_id,
        date: enrollment.date
    }

    try {
        const response = await fetch (`http://localhost:8080/enrollments/delete/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(en)
        }) 
        const data = await response.json();

        removeEnrollment(enrollment);
        return data; 
    } catch (error) {
        console.log('Error eliminando inscripción', error)
    }
}



