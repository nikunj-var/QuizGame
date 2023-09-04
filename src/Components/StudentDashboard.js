import React, { useEffect, useState } from "react";
import db from "./FireBase";

function StudentDashboard() {
  const [quizResult, setQuizResult] = useState(null);
  const studentId = sessionStorage.getItem("studentId");
  useEffect(() => {
    // Fetch data from the "quizResults" collection

    db.collection("quizResults")
      .doc(studentId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // Document with the specified student ID exists
          const data = doc.data();
          setQuizResult(data);
        } else {
          // Document with the specified student ID does not exist
          console.log("Document not found.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [studentId]);

  return (
    <div>
      <h2>Quiz Result</h2>
      {quizResult ? (
        <>
          <p>Name: {quizResult.name}</p>
          <p>Score: {quizResult.score}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default StudentDashboard;
