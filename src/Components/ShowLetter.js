import React, { useState, Redirect, useEffect } from "react";
import db from "./FireBase";

function ShowLetter({ setScore }) {
  const alphabetList = ["B", "L", "E", "T", "A"];
  const words = ["BELT", "EAT", "ATE", "LET", "TABLE"];

  const studentId = sessionStorage.getItem("studentId");

  const [enteredword, setEnteredWord] = useState("");
  const [matchedWords, setMatchedWords] = useState([]);

  const handleButtonClick = (letter) => {
    setEnteredWord(enteredword + letter); // Append the clicked letter to the existing value
  };

  const handleInputSubmit = async (e) => {
    if (words.includes(enteredword)) {
      try {
        const studentDocRef = db.collection("quizResults").doc(studentId);
        const querySnapshot = await studentDocRef.get();
        if (querySnapshot.exists) {
          const studentData = querySnapshot.data();
          const wordArray = studentData.wordarray || [];

          if (!wordArray.includes(enteredword)) {
            wordArray.push(enteredword);

            await studentDocRef.update({
              wordarray: wordArray,
              score: studentData.score + 1,
            });

            setScore((prevScore) => parseInt(prevScore) + 1);
          } else {
            alert("Word Counts Already");
          }
        } else {
          alert("Student not found");
        }
      } catch (error) {
        console.error("Error updating data:", error);
      }
    } else {
      alert("You entered the wrong word");
    }
    setEnteredWord("");
    console.log(studentId);
  };

  const handleReset = () => {
    setEnteredWord("");
  };

  // move to another page when the timer sets to 0

  return (
    <div>
      <div>
        {alphabetList.map((letter, index) => (
          <button
            key={index}
            className="letterbutton"
            onClick={() => handleButtonClick(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
      <div className="input-field-box">
        <input type="text" value={enteredword} className="input-letter" />
        <br></br>
        <div>
          <button onClick={handleInputSubmit}>SUBMIT</button>&nbsp;
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </div>
  );
}

export default ShowLetter;
