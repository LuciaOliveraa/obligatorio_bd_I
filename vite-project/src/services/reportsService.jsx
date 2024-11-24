export const getReports = async() => {
    try {
        const response = await fetch (`http://localhost:8080/reports`, {
            method: "GET"
        }) 
        const data = await response.json();
        return data; 
    } catch (error) {
        console.log('Error obteniendo clases', error)
    }
}