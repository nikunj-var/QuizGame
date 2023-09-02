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
  return (
    <nav>
      <ul>
        <li onClick={handleStudentPortal}>StudentPortal</li>
        <li onClick={handleStudentDashboard}>StudentDashboard</li>
        <li onClick={handleTeacherDashboard}>TeacherDashboard</li>
        <li onClick={handleTeacherPortal}>TeacherPortal</li>
      </ul>
    </nav>
  );
}

export default Navbar;
