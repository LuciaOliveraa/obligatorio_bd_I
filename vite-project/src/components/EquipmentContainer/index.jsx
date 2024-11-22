import EquipmentCard from "../EquipmentCard"
import bootsImage from '../../assets/boots.png'
import motorbikeImage from '../../assets/motorbike.png'
import gogglesImage from '../../assets/goggles.png'
import helmetImage from '../../assets/helmet.png'
import polesImage from '../../assets/poles.png'
import skisImage from '../../assets/skis.png'
import snowboardImage from '../../assets/snowboardTable.png'
import completeKit from '../../assets/skis_boots_poles.png'
import halfKit from '../../assets/snowboard_boots.png'
import './EquipmentContainer.css'

export default function EquipmentContainer({ equipment }){
   
    const equipmentImages = {
        "Ski (esquís, botas y bastones)" : completeKit,
        "Set snowboard (tabla y botas)" : halfKit,
        "Alquiler de moto de nieve (2 horas)": motorbikeImage,
        "Casco protector": helmetImage,
        "Gafas para moto de nieve": gogglesImage,
        "Gafas para snowboard": gogglesImage,
        "Gafas para ski": gogglesImage,
        "Esquís": skisImage,
        "Botas de ski" : bootsImage,
        "Bastones de ski" : polesImage,
        "Tabla de snowboard" : snowboardImage,
        "Botas de snowboard" : bootsImage
    }; 

    return (
        <div className="card-container">
            {equipment.map((equipmentItem) => (
                <EquipmentCard
                key={equipmentItem.id}
                image={equipmentImages[equipmentItem.description]}  
                title={equipmentItem.description}
                />
      ))}
        </div>
    )
}