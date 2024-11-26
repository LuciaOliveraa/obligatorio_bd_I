import SportCard from "../SportCard";
import motorbikeImage from '../../assets/motorbike.png';
import snowboardImage from '../../assets/skateboard.png';
import skiImage from '../../assets/ski.png';
import './SportsContainer.css';
import { getActivities } from "../../services/activitiesService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserType } from "../../context/UserTypeContext";

export default function SportsContainer({enrollment, setEnrollment}) {
    const { userType } = useUserType();
    const [activities, setActivities] = useState([]); 
    const navigate = useNavigate();

    const activityImages = {
        "Moto de nieve": motorbikeImage,
        "Snowboard": snowboardImage,
        "Ski": skiImage
    }; 

    const fetchActivities = async () => {
        try {
            const data = await getActivities(); 
            setActivities(data); 
            console.log(data); 
        } catch (error) {
            console.error("Error obteniendo actividades", error)
        }
    }
    
    useEffect(() => {
        fetchActivities();
    }, []);

   
    return (
        <div className="card-container">
            {activities?.map((activity) => (
                (userType == "student") ? 
                (<SportCard 
                    key={activity.id}
                    image={activityImages[activity.name]}
                    title={activity.name}
                    description={activity.description}
                    onClick={() => {
                        setEnrollment((prev) => ({
                            ...prev,
                            activityId: activity.id,
                            activityName: activity.name,
                            activityPrice: activity.price
                        }));

                        navigate(`/equipment/${activity.id}`);
                    }}
                />) 
                :
                (<SportCard 
                    key={activity.id}
                    image={activityImages[activity.name]}
                    title={activity.name}
                    description={activity.description}
                />)
            ))}
        </div>
    )
}