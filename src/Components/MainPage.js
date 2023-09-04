import Timer from "./Timer";
import ShowLetter from "./ShowLetter";
import db from "./FireBase";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
function MainPage() {
  const studentId = sessionStorage.getItem("studentId");
  const [score, setScore] = useState(0);
  const [wordArray, setWordArray] = useState([]);

  useEffect(() => {
    // Load the student's existing score from their document in quizResults collection
    const studentDocRef = db.collection("quizResults").doc(studentId);

    const unsubscribe = studentDocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const studentData = doc.data();
        setScore(studentData.score || 0);
        setWordArray(studentData.wordarray || []);
        console.log("if statement runs");
        console.log(score);
        console.log(wordArray);
      }
    });
  }, [studentId]);
  // console.log(wordArray);
  return (
    <div className="main-page">
      <div className="round">
        <header>
          <ul>
            <li>Round 1</li>
            <li>
              <h3>
                <Timer />
              </h3>
            </li>
            <li>Score {score}</li>
          </ul>
        </header>
        <main>
          <h1>MAKE WORDS</h1>
          <div className="showletter ">
            <ShowLetter setScore={setScore} />
          </div>
        </main>
      </div>
      <div className="correctWords">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Data</th>
            </tr>
          </thead>
          <tbody>
            {wordArray.map((word, index) => (
              <tr key={index}>
                <td>{word}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MainPage;
