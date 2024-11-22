import "./style.css";
import ucuLogo from "../../assets/ucuLogo.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useUser } from "../../context/StudentContext";

export default function Login() {
  const { user, updateUser } = useUser();
  const [show, setShow] = useState(false);

  return (
    <div className="login">
      <div className="box loginDiv">
        <div className="logoTitulo">
          <img src={ucuLogo} className="ucuLogo" />
          <h1 className="title is-1">¡Bienvenido!</h1>
        </div>
        <div className="loginLabel">
          <label className="label">Usuario</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="ingrese su usuario"
              id="usuarioInput"
            />
          </div>
        </div>
        <div className="loginLabel">
          <label className="label">Contraseña</label>
          <div className="control">
            <input
              className="input"
              type={show ? "text" : "password"}
              placeholder="********"
              id="passwordInput"
            />
            <span onClick={() => setShow(!show)} className="passwordEye">
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button className="botonSiguiente"> Siguiente </button>
      </div>
    </div>
  );
}
