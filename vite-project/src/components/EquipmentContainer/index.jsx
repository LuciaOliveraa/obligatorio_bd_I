import EquipmentCard from "../EquipmentCard"
import bootsImage from '../../assets/boots.png'
import gogglesImage from '../../assets/goggles.png'
import helmetImage from '../../assets/helmet.png'
import polesImage from '../../assets/poles.png'
import skisImage from '../../assets/skis.png'
import './EquipmentContainer.css'

export default function EquipmentContainer(){
    return (
        <div className="card-container">
            <EquipmentCard 
                image={bootsImage}
                title='Ski boots'
            />
            <EquipmentCard
                image={gogglesImage}
                title='Ski goggles'
            />
            <EquipmentCard
                image={helmetImage}
                title='Protective helmet'
            />
            <EquipmentCard
                image={polesImage}
                title='Ski poles'
            />
            <EquipmentCard
                image={skisImage}
                title='Skis'
            />
        </div>
    )
}