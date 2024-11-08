import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoUCUBlanco.png';
import { VscAccount as UserIcon } from "react-icons/vsc";
import './NavBar.css'

export default function Navbar() {
  return (
    <nav className="navbar custom-navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item">
            <img src={logo} alt="Logo" className="logo"/>
        </Link>
        
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link className="navbar-item item" to="/home">
            Actividades
          </Link>
          <Link className="navbar-item item" to="/admin">
            Administración
          </Link>
          <Link className="navbar-item item">
            Usuario 
            <UserIcon className='user-icon'></UserIcon>
          </Link>
        </div>
      </div>
    </nav>
  );
}
