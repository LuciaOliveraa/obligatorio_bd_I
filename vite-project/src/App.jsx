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
import { UserTypeProvider } from "./context/UserTypeContext";
import { StudentProvider } from "./context/StudentContext";
import Instructor from "./components/Instructor";
import { InstructorProvider } from "./context/InstructorContext";
import { useState, useEffect } from "react";

function App() {
  const [enrollment, setEnrollment] = useState({}); 
  const [rent, setRent] = useState({}); 

  useEffect(() => {
    console.log("enrollment actualizado:", enrollment);
  }, [enrollment]);

  useEffect(() => {
    console.log("rent actualizado:", rent);
  }, [rent]);


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
    <UserTypeProvider>
      <StudentProvider>
        <InstructorProvider>

          <Router>
            <div className="app">
              <Routes>
                <Route path="/*" element={<Navigate replace to="/login" />} /> 
                <Route path="/login" element={<Login  />} />
                <Route path="/home" element={<HomePage setEnrollment={setEnrollment} enrollment={enrollment}/>} />
                <Route path="/schedule" element={<Schedule setEnrollment={setEnrollment} enrollment={enrollment}/>} />
                <Route path="/equipment/:activityId" element={<Equipment rent={rent} setRent={setRent} />} />
                <Route path="/summary" element={<Summary enrollment={enrollment} rent={rent}></Summary>} />
                <Route path="/admin" element={<Administration></Administration>} />
                <Route
                  path="/user"
                  element={<UserPage user={instructor}></UserPage>}
                />
              </Routes>
            </div>
          </Router>

        </InstructorProvider>
      </StudentProvider>
    </UserTypeProvider>
      
    </>
  );
}

export default App;
