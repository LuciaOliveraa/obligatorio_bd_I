import style from "./Lessons.module.css";
import { IoIosAddCircleOutline as Add } from "react-icons/io";
import Lesson from "../Lesson";

export default function Lessons({ setVisibleLessons }) {
  return (
    <div>
      <p className={style.lessonsTitle}>Clases</p>
      <div className={style.allLessons}>
        <Lesson
          instructor="Elba Lazo"
          shift="Vespertino"
          activity="Snowboard"
          capacity="20"
          setVisibleLessons={setVisibleLessons}
        />
        <Lesson
          instructor="Elba Lazo"
          shift="Vespertino"
          activity="Snowboard"
          capacity="20"
          setVisibleLessons={setVisibleLessons}
        />
        <Lesson
          instructor="Elba Lazo"
          shift="Vespertino"
          activity="Snowboard"
          capacity="20"
          setVisibleLessons={setVisibleLessons}
        />
      </div>
    </div>
  );
}