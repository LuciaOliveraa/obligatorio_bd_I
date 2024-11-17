import style from './StadisticCard.module.css'
import { LiaTrophySolid as Badge} from "react-icons/lia";

export default function StadisticCard({ title, winner, info }) {
    return (
        <>
            <div className={style.card}>
                <div className={style.badge}>
                    <Badge className={style.icon} />
                </div>
                <p className={style.title}>{title}</p> 
                <div>
                    <p className={style.winner}>{winner}</p>
                </div>  
                <div>
                    <p className={style.info}>{info}</p>
                </div>
            </div>
        </>
    )
}