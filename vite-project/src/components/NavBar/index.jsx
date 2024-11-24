import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoUCUBlanco.png";
import { VscAccount as UserIcon } from "react-icons/vsc";
import "./NavBar.css";
import { useUserType } from "../../context/UserTypeContext";

export default function Navbar() {
  const { userType } = useUserType();

  const [isAdmin, setIsAdmin] = useState(userType == "admin");

  return (
    <nav
      className="navbar custom-navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">

          <div className="item">
            <Link className="navbar-item item" to="/home">
              Actividades
            </Link>
          </div>
         
        { isAdmin &&
          <div className="item">
            <Link className="navbar-item item" to="/admin">
              Administración
            </Link>
          </div>
        }
        { !isAdmin &&
          <div className="item">
            <Link className="navbar-item item" to="/user">
              Usuario
              <UserIcon className="user-icon"></UserIcon>
            </Link>
          </div>
        }
        </div>
      </div>
    </nav>
  );
}
