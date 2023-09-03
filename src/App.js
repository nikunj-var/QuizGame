import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./Components/MainPage";
import ShowLetter from "./Components/ShowLetter";
import StudentDashboard from "./Components/StudentDashboard";
import TeacherPortal from "./Components/TeacherPortal";
import StudentPortal from "./Components/StudentPortal";
import WaitingRoom from "./Components/WaitingRoom";
import TeacherDashboard from "./Components/TeacherDashboard";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
function App() {
  return (
    <div className="App">
      {<Navbar />}
      <Router>
        <Routes>
          <Route path="/" element={<StudentPortal />} />
          <Route path="/studentportal" element={<StudentPortal />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/teacherportal" element={<TeacherPortal />} />
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/waitingroom" element={<WaitingRoom />} />
          <Route path="/teacherdashboard" element={<TeacherDashboard />} />
          <Route path="/showletter" element={<ShowLetter />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
