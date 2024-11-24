import "./Administration.css";
import Navbar from "../../components/NavBar";
import Students from "../../components/Students";
import { EditModalStudent } from "../../components/EditModalStudent";
import "./Administration.css";
import StadisticsContainer from "../../components/StadisticsContainer";
import Instructors from "../../components/Instructors";
import Activities from "../../components/Activities";
import { useState } from "react";
import { EditModalActivities } from "../../components/EditModalActivities";
import { EditModalInstructors } from "../../components/EditModalInstructors";
import "./Administration.css";
import Shifts from "../../components/Shifts";
import Lessons from "../../components/Lessons";
import { EditModalShifts } from "../../components/EditModalShifts";
import { EditModalLessons } from "../../components/EditModalLessons";

export default function Administration() {
  const [visibleLessons, setVisibleLessons] = useState(false);

  return (
    <div className="admin-page">
      <Navbar></Navbar>
      <div className="admin-container">
        <StadisticsContainer />
        <Students />
        <Instructors />
        <Activities />
        <Shifts />
        <Lessons setVisibleLessons={setVisibleLessons}></Lessons>
      </div>


      {visibleLessons && (
        <EditModalLessons setVisibleLessons={setVisibleLessons} />
      )}
    </div>
  );
}
