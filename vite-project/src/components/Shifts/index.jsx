import style from './Shifts.module.css'
import Shift from '../Shift';
import { IoIosAddCircleOutline as Add } from "react-icons/io";

export default function Shifts(){
    return (
        <div>
            <div className={style.shiftsAndAdd}>
                <p className={style.shiftsTitle}>Turnos</p>
                <button className={style.addButton}><Add className={style.add}></Add> </button>
            </div>
            <div className={style.allShifts}>
                <Shift 
                    startsAt='9:00'
                    endsAt='11:00'
                />
                <Shift 
                    startsAt='12:00'
                    endsAt='14:00'
                />
                <Shift 
                    startsAt='16:00'
                    endsAt='18:00'
                />
            </div>
        </div>
    )
}