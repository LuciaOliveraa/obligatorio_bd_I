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
import { useState, useEffect } from "react"

export default function EquipmentContainer({ equipment, setRent, rent }){
    const [selectedEquipment, setSelectedEquipment] = useState([]); 

    const equipmentImages = {
        "Set Ski (esquís, botas y bastones)" : completeKit,
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
    useEffect(() => {
        console.log("rent actualizado:", rent);
    }, [rent]);

    const handleEquipmentClick = (equipmentItem) => {
        setSelectedEquipment((prev) => {
          // Verifica si ya está seleccionado
          const isSelected = prev.some((item) => item.id === equipmentItem.id);
    
          // Actualiza el array de selección
          const updatedSelection = isSelected
            ? prev.filter((item) => item.id !== equipmentItem.id) // Quita el equipo
            : [...prev, { id: equipmentItem.id, name: equipmentItem.description, equipmentPrice: equipmentItem.price }]; // Agrega el equipo como { id, name }
    
          // Actualiza el estado global rent
          setRent((prevRent) => ({
            ...prevRent,
            equipment: updatedSelection, // Guarda el array actualizado
          }));
    
          return updatedSelection;
        });
      };

    return (
        <div className="card-container">
            {equipment.map((equipmentItem) => (
                <EquipmentCard
                    key={equipmentItem.id}
                    image={equipmentImages[equipmentItem.description]}  
                    title={equipmentItem.description}
                    isSelected={selectedEquipment.some((item) => item.id === equipmentItem.id)}
                    onClick={() => handleEquipmentClick(equipmentItem)}
                />
      ))}
        </div>
    )
}