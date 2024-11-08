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

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/*" element={<Navigate replace to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<HomePage></HomePage>} />
            <Route path="/schedule" element={<Schedule></Schedule>} />
            <Route path="/equipment" element={<Equipment></Equipment>} />
            <Route path="/summary" element={<Summary></Summary>} />
            <Route path="/admin" element={<Administration></Administration>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
