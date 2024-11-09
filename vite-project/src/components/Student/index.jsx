import './Student.css'
import { TbPencil as Pencil} from "react-icons/tb";
import { GoTrash as Trash } from "react-icons/go";

export default function Student({ci,email,name,lastname,birthdate,phone_number}){
    
    return (
        <div className='info-and-buttons'>
            <div className='info'>
                <span><strong>CI: </strong>{ci}</span>
                <span><strong>Nombre: </strong>{name} {lastname}</span>
                <span><strong>Email: </strong>{email}</span>
            </div>
            <div className='buttons'>
                <button className='button delete-button'><Trash className='trash'></Trash></button>
                <button className='button edit-button'><Pencil className='pencil'></Pencil></button>
            </div>

        </div>
    )
}