import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage";

import StudentDashboard from "./Components/StudentDashboard";
import TeacherPortal from "./Components/TeacherPortal";
import StudentPortal from "./Components/StudentPortal";
import WaitingRoom from "./Components/WaitingRoom";
import TeacherDashboard from "./Components/TeacherDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/teacherportal" element={<TeacherPortal />} />
        <Route path="/studentportal" element={<StudentPortal />} />
        <Route path="/waitingroom" element={<WaitingRoom />} />
        <Route path="/teacherdashboard" element={<TeacherDashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
