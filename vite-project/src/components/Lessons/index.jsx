import style from "./Lessons.module.css";
import { IoIosAddCircleOutline as Add } from "react-icons/io";
import Lesson from "../Lesson";
import { getLessons } from "../../services/lessonsService";
import { useState, useEffect } from "react";
import { getInstructor } from "../../services/instructorsService";

export default function Lessons({ setVisibleLessons }) {
  const [lessons, setLessons] = useState([]); 

  const fetchLessons = async () => {
    try {
        const data = await getLessons(); 
        setLessons(data); 
        console.log(data); 
    } catch (error) {
        console.error("Error obteniendo clases", error)
    }
  }

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <div>
      <p className={style.lessonsTitle}>Clases</p>
      <div className={style.allLessons}>
        {lessons.map((lesson) => (
          <Lesson 
            key = {lesson.id}
            id = {lesson.id}
            instructorId = {lesson.instructor_ci}
            shiftId = {lesson.shift_id}
            activityId = {lesson.activity_id}
            capacity = {lesson.capacity}
          />
        ))}
      </div>
    </div>
  );
}
