import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import ShowLetter from "./ShowLetter";
import db from "./FireBase";

function MainPage() {
  const initialScore = localStorage.getItem("score") || "0";
  const [score, setScore] = useState(initialScore);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    db.collection("words").onSnapshot((snapshot) => {
      const newDataList = snapshot.docs.map((doc) => doc.data().data);
      setDataList(newDataList);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score);
  }, [score]);

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
            {dataList.map((data) => {
              return (
                <tr>
                  <th>{data}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default MainPage;
