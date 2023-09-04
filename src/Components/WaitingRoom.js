import React, { useEffect, useState } from "react";
import db from "./FireBase";
function WaitingRoom() {
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    const unsubscribe = db.collection("quizResults").onSnapshot((snapshot) => {
      const students = snapshot.docs.map((doc) => doc.data());
      const quizHasStarted = students.find(
        (student) => student.status === "inside"
      );
      setQuizStarted(quizHasStarted);
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    if (quizStarted) {
      window.location.href = "/mainpage"; // Redirect to quiz page if quiz has started
    }
  });

  return (
    <div className="waitingbox">
      <h1>Waiting Room</h1>
      <p>Waiting for the quiz to start...</p>
    </div>
  );
}

export default WaitingRoom;
