import "./Administration.css";
import Navbar from "../../components/NavBar";
import Students from "../../components/Students";
import "./Administration.css";
import StadisticsContainer from "../../components/StadisticsContainer";
import Instructors from "../../components/Instructors";
import Activities from "../../components/Activities";
import { useState } from "react";
import "./Administration.css";
import Shifts from "../../components/Shifts";
import Lessons from "../../components/Lessons";

export default function Administration() {

  return (
    <div className="admin-page">
      <Navbar></Navbar>
      <div className="admin-container">
        <StadisticsContainer />
        <Students />
        <Instructors />
        <Activities />
        <Shifts />
        <Lessons />
      </div>

    </div>
  );
}
