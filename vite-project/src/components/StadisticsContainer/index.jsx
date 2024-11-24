import StadisticCard from "../StadisticCard"
import style from './StadisticsContainer.module.css'
import { getReports } from "../../services/reportsService"
import { useState, useEffect } from "react";
import { getShift } from "../../services/shiftsService";

export default function StadisticsContainer() {
    const [activityWithMostStudents, setActivityWithMostStudents] = useState([]);
    const [activityRevenue, setActivityRevenue] = useState([]);
    const [shiftsWithMostClasses, setShiftsWithMostClasses] = useState([]);

    const fetchReports = async () => {
        try {
          const data = await getReports();
          setActivityWithMostStudents(data.activities_with_most_students);
          setActivityRevenue(data.activity_revenue);
          setShiftsWithMostClasses(data.shifts_with_most_classes);
        } catch (error) {
          console.error("Error obteniendo reportes", error);
        }
    };

    useEffect(() => {
        fetchReports();
    }, []); 


    return (
        <div className={style.allContainer}>
            <div>
                <p className={style.title}>Estadísticas</p>
            </div>
            <div className={style.container}>
                <StadisticCard 
                    title='Actividad con más ingresos generados'
                    winner= {activityRevenue[0]?.activity_name}
                    info={`con una suma total de $${activityRevenue[0]?.total_revenue || 0}`}
                />
                <StadisticCard 
                    title='Actividad con la mayor cantidad de alumnos'
                    winner= {activityWithMostStudents[0]?.activity_name}
                    info={`con un total de ${activityWithMostStudents[0]?.total_students} alumnos`}
                />
                <StadisticCard 
                    title='Turno con más clases dictadas'
                    winner={shiftsWithMostClasses[0]?.shift_name}
                    info={`con un total de ${shiftsWithMostClasses[0]?.total_classes} clases`}
                />
            </div>
        </div>
        
    )
}