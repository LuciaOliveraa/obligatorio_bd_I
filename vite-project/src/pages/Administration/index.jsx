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
import { LogOutModal } from "../../components/LogOutModal";
import { SettingOutlined } from "@ant-design/icons";

export default function Administration() {

  const { userType } = useUserType();

  const [ isAdmin, setIsAdmin ] = useState(userType == "admin");
  const [visibleLogOut, setVisibleLogOut] = useState(false);

  return (
    <>
    { isAdmin ?
      <div className="admin-page">
      <Navbar></Navbar>
      <div className="admin-container">
        <div className="settingsButtonDiv">
          <SettingOutlined
            id={"settingsIcon"}
            style={{ fontSize: "26px", marginLeft: "10px" }}
            onClick={() => {
              setVisibleLogOut(true);
            }}
          />
        </div>
        <StadisticsContainer />
        <Students />
        <Instructors />
        <Activities />
        <Shifts />
        <Lessons />
      </div>

      {visibleLogOut && (
        <LogOutModal setVisibleLogOut={setVisibleLogOut} />
      )}

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
