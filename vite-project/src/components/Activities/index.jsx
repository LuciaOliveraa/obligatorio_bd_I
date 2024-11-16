import style from "./Activities.module.css";
import Activity from "../Activity";
import { IoIosAddCircleOutline as Add } from "react-icons/io";

export default function Activities({ setVisibleActivities }) {
  return (
    <div>
      <p className={style.activitiesTitle}>Actividades</p>
      <div className={style.allActivities}>
        <Activity
          name="Ski"
          ageMin="18"
          price="$10000"
          description="cdkmdkcmdkmcdkm"
          setVisibleActivities={setVisibleActivities}
        />
        <Activity
          name="Moto de nieve"
          ageMin="18"
          price="$10000"
          description="cdkmdkcmdkmcdkm"
          setVisibleActivities={setVisibleActivities}
        />
        <Activity
          name="Snowboard"
          ageMin="18"
          price="$10000"
          description="cdkmdkcmdkmcdkm"
          setVisibleActivities={setVisibleActivities}
        />
      </div>
    </div>
  );
}
