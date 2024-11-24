import style from "./Activities.module.css";
import Activity from "../Activity";
import { IoIosAddCircleOutline as Add } from "react-icons/io";
import { getActivities } from "../../services/activitiesService";
import { useState, useRef, useEffect } from "react";

export default function Activities() {
  const [activities, setActivities] = useState([]); 
  const [trigger, setTrigger] = useState(0); 

  const fetchActivities = async () => {
    try {
      const data = await getActivities();
      setActivities(data); 
    } catch (error) {
      console.error("Error obteniendo actividades", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, [trigger]);

  return (
    <div>
      <p className={style.activitiesTitle}>Actividades</p>
      <div className={style.allActivities}>
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            ageMin={activity.age_min}
            price={activity.price}
            description={activity.description}
            trigger = {setTrigger}
          />
        ))}
      </div>
    </div>
  );
}
