import StadisticCard from "../StadisticCard"
import style from './StadisticsContainer.module.css'

export default function StadisticsContainer() {
    return (
        <div className={style.allContainer}>
            <div>
                <p className={style.title}>Estadísticas</p>
            </div>
            <div className={style.container}>
                <StadisticCard 
                    title='Actividad con más ingresos generados'
                    winner='Ski'
                    info='con una suma total de: $300.000'
                />
                <StadisticCard 
                    title='Actividad con la mayor cantidad de alumnos'
                    winner='Moto de nieve'
                    info='con un total de 22 alumnos'
                />
                <StadisticCard 
                    title='Turno con más clases dictadas'
                    winner='Vespertino'
                    info='con un total de 50 clases'
                />
            </div>
        </div>
        
    )
}