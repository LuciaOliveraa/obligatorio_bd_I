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
import { useUserType } from "../../context/UserTypeContext";

export default function Administration() {

  const { userType } = useUserType();

  const [ isAdmin, setIsAdmin ] = useState(userType == "admin");

  return (
    <>
    { isAdmin ?
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

    </div> :
    
    <div className="admin-page">
      <Navbar></Navbar>
      <div className="admin-container">
        <span className="error"> No tienes acceso a esta pestaña </span>
      </div>

    </div>}
    </>
  );
}
