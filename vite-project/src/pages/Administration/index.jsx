import "./Administration.css";
import Navbar from "../../components/NavBar";
import Students from "../../components/Students";
import { EditModal } from "../../components/EditModal";

export default function Administration() {
  return (
    <div className="admin-page">
      <Navbar></Navbar>
      <div></div>
      <div className="admin-container">
        <Students></Students>
      </div>
      <EditModal />
    </div>
  );
}
