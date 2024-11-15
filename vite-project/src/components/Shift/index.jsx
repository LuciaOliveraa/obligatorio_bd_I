import style from './Shift.module.css'
import { TbPencil as Pencil} from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";

export default function Shift({startsAt, endsAt}){
    return (
        <div className={style.infoandbuttons}>
            <div className={style.info}>
                <span><strong>Horario incio: </strong>{startsAt}</span>
                <span><strong>Horario fin: </strong>{endsAt}</span>
            </div>
            <div className='buttons'>
                <button className={style.deletebutton}><Trash className={style.trash}></Trash></button>
                <button className={style.editbutton}><Pencil className={style.pencil}></Pencil></button>
            </div>
        </div>
    )
}