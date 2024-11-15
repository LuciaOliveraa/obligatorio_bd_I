import "./Administration.css";
import Navbar from "../../components/NavBar";
import Students from "../../components/Students";
import { EditModal } from "../../components/EditModal";
import "./Administration.css";
import StadisticsContainer from "../../components/StadisticsContainer";
import Instructors from "../../components/Instructors";
import Activities from "../../components/Activities";

export default function Administration() {
  return (
    <div className="admin-page">
      <Navbar></Navbar>
      <div className="admin-container">
        <StadisticsContainer />
        <Students></Students>
        <Instructors></Instructors>
        <Activities></Activities>
      </div>
      <EditModal />
    </div>
  );
}
