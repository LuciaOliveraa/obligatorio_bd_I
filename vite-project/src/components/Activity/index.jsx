import style from './Activity.module.css'
import { TbPencil as Pencil} from "react-icons/tb";

export default function Activity({name, description, ageMin, price}){
    return (
        <div className={style.infoandbuttons}>
            <div className={style.info}>
                <span><strong>Actividad: </strong>{name}</span>
                <span><strong>Mínimo de edad: </strong>{ageMin}</span>
                <span><strong>Costo: </strong>{price}</span>
            </div>
            <div className='buttons'>
                <button className={style.editbutton}><Pencil className={style.pencil}></Pencil></button>
            </div>
        </div>
    )
}