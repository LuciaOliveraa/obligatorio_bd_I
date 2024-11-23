import "./style.css";
import ucuLogo from "../../assets/ucuLogo.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useStudent } from "../../context/StudentContext";
import { loginAccount } from "../../services/loginService";
import { useInstructor } from "../../context/InstructorContext";
import { useUserType } from "../../context/UserTypeContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { student, updateStudent } = useStudent();
  const { updateInstructor } = useInstructor();
  const { userType, updateUserType } = useUserType();

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const userData = { username, password };

    const success = await loginAccount(userData, updateStudent, userType, updateUserType);
    console.log("resultado log in: ", success);
    if (!success) {
      navigate("/login");
    }
    if (success) {
      navigate("/home");
    }
  }

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
              id="usuarioInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese su usuario"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShow(!show)} className="passwordEye">
              {show ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <button className="botonSiguiente" onClick={login}> Siguiente </button>
      </div>
    </div>
  );
}
