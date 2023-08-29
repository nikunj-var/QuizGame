import React, { useState, Redirect, useEffect } from "react";
import db from "./FireBase";

function ShowLetter({ setScore }) {
  const alphabetList = ["B", "L", "E", "T", "A"];
  const words = ["BELT", "EAT", "ATE", "LET", "TABLE"];

  const [enteredword, setEnteredWord] = useState("");
  const [matchedWords, setMatchedWords] = useState([]);

  const handleButtonClick = (letter) => {
    setEnteredWord(enteredword + letter); // Append the clicked letter to the existing value
  };

  const handleInputSubmit = async (e) => {
    if (words.includes(enteredword)) {
      setMatchedWords((prevMatchedWords) => [...prevMatchedWords, enteredword]);

      const wordRef = db.collection("words").where("data", "==", enteredword);

      const querySnapshot = await wordRef.get();

      e.preventDefault();

      if (!querySnapshot.empty) {
        alert("Word Counts Already");
      } else {
        // If the word doesn't exist, add it to Firestore
        await db.collection("words").add({
          data: enteredword,
        });
        setScore((prevScore) => parseInt(prevScore) + 1);
      }
    } else {
      alert("You enter wrong word");
    }
    setEnteredWord("");
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
