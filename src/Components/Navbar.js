import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const handleStudentDashboard = () => {
    window.location.href = "/studentdashboard";
  };
  const handleStudentPortal = () => {
    window.location.href = "/studentportal";
  };
  const handleTeacherDashboard = () => {
    window.location.href = "/teacherdashboard";
  };
  const handleTeacherPortal = () => {
    window.location.href = "/teacherportal";
  };
  const handleResult = () => {
    window.location.href = "/result";
  };
  return (
    <nav>
      <ul>
        <li onClick={handleStudentPortal}>StudentPortal</li>
        <li onClick={handleStudentDashboard}>StudentDashboard</li>
        <li onClick={handleTeacherDashboard}>TeacherDashboard</li>
        <li onClick={handleTeacherPortal}>TeacherPortal</li>
        <li onClick={handleResult}>Result</li>
      </ul>
    </nav>
  );
}

export default Navbar;
