import style from "./Activities.module.css";
import Activity from "../Activity";
import { IoIosAddCircleOutline as Add } from "react-icons/io";
import { getActivities } from "../../services/activitiesService";
import { useState, useRef, useEffect } from "react";

export default function Activities() {
  const activitiesRef = useRef([]); 
  const [, forceUpdate] = useState(false); 

  const fetchActivities = async () => {
    try {
      const data = await getActivities();
      activitiesRef.current = data; 
      forceUpdate((prev) => !prev); 
      console.log("Activities", data);
    } catch (error) {
      console.error("Error obteniendo actividades", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div>
      <p className={style.activitiesTitle}>Actividades</p>
      <div className={style.allActivities}>
        {activitiesRef.current.map((activity) => (
          <Activity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            ageMin={activity.age_min}
            price={activity.price}
            description={activity.description}
          />
        ))}
      </div>
    </div>
  );
}
