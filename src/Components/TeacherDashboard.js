import React, { useState, useEffect } from "react";
import db from "./FireBase";
import { Link } from "react-router-dom";

function TeacherDashboard() {
  const [waitingStudents, setWaitingStudents] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("quizResults")
      .where("status", "==", "waiting")
      .onSnapshot((snapshot) => {
        const waitingStudentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWaitingStudents(waitingStudentsData);
      });

    return () => unsubscribe();
  }, []);

  const startQuizForWaitingStudents = async () => {
    waitingStudents.forEach(async (student) => {
      await db
        .collection("quizResults")
        .doc(student.id)
        .update({ status: "inside" });
    });
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img
                className="img"
                src="https://cdn-icons-png.flaticon.com/256/11826/11826847.png"
                alt=""
              />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main-item">
        <h1>Waiting Students</h1>
        <ul>
          {waitingStudents.map((student, index) => (
            <li key={index}>{student.name}</li>
          ))}
        </ul>
        <button onClick={startQuizForWaitingStudents}>Start Quiz</button>
      </div>
    </div>
  );
}

export default TeacherDashboard;
