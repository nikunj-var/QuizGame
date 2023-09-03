import React, { useEffect, useState } from "react";
import db from "./FireBase";

function QuizResultsTable() {
  const [quizResults, setQuizResults] = useState([]);

  useEffect(() => {
    // Fetch data from the "quizResults" collection
    db.collection("quizResults")
      .get()
      .then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          // Get the "name" and "code" fields from each document
          const { name, code, score } = doc.data();
          data.push({ name, code, score });
        });
        setQuizResults(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Quiz Results</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {quizResults.map((result, index) => (
            <tr key={index}>
              <td>{result.name}</td>
              <td>{result.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuizResultsTable;
