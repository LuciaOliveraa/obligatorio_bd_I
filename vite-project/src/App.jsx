import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../src/pages/Login";
import Administration from "../src/pages/Administration";
import Equipment from "../src/pages/Equipment";
import HomePage from "../src/pages/HomePage";
import Schedule from "../src/pages/Schedule";
import Summary from "../src/pages/Summary";
import { UserPage } from "./pages/UserPage";

function App() {
  const user = {
    name: "Julián",
    age: 25,
    email: "julian.bevc05@correo.ucu.com",
    clase: ["ski", "patines", "moto"],
    horario: "Vespertino",
    fecha: "23/04/14",
  };

  const instructor = {
    ci: 54785012,
    name: "Susana",
    apellido: "Horia",
    email: "julian.bevc05@gmail.com",
    clasesDictando: "Ski",
    horario: "matutino",
    fecha: "12/06/24",
  };

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/*" element={<Navigate replace to="/home" />} /> 
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/schedule" element={<Schedule></Schedule>} />
            <Route path="/equipment/:activityId" element={<Equipment/>} />
            <Route path="/summary" element={<Summary></Summary>} />
            <Route path="/admin" element={<Administration></Administration>} />
            <Route
              path="/user"
              element={<UserPage user={instructor}></UserPage>}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
