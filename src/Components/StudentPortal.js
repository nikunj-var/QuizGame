import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "firebase/database";
import db from "./FireBase";

function StudentPortal() {
  const [enteredcode, setEnteredCode] = useState("");
  const [enteredname, setEnteredname] = useState("");

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    db.collection("singlecode").onSnapshot((snapshot) => {
      const newDataList = snapshot.docs.map((doc) => doc.data().data);
      setDataList(newDataList);
    });
  }, []);

  //   code for waiting room
  const [isWaiting, setIsWaiting] = useState(false);

  const adddetails = async (e) => {
    e.preventDefault();

    // console.log("datalist", dataList[0]);
    // console.log("enteredcode", enteredcode);

    dataList[0] = dataList[0].toString();

    if (dataList.length > 0 && enteredcode === dataList[0]) {
      try {
        const studentId = enteredname.toLowerCase();
        sessionStorage.setItem("studentId", studentId); 
        await db.collection("quizResults").doc(studentId).set({
          code: enteredcode,
          name: enteredname,
          score: 0,
          id: studentId,
          status: "waiting",
          wordarray: [],
        });

       
        setIsWaiting(true);
        window.location.href = "/waitingroom";
      } catch (error) {
        console.error("Error saving data:", error);
      }
    } else {
      alert("you entered wrong code");
    }
    setEnteredCode("");
    setEnteredname("");
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
        <input
          type="number"
          placeholder="Enter code here"
          className="inputtext"
          value={enteredcode}
          onChange={(e) => {
            setEnteredCode(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter your name"
          className="inputtext"
          value={enteredname}
          onChange={(e) => {
            setEnteredname(e.target.value);
          }}
        />
        <button onClick={adddetails}>START QUIZ</button>
      </div>
    </div>
  );
}
export default StudentPortal;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "firebase/database";
// import db from "./FireBase";

// function StudentPortal() {
//   const [enteredcode, setEnteredCode] = useState("");
//   const [enteredname, setEnteredname] = useState("");

//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     db.collection("singlecode").onSnapshot((snapshot) => {
//       const newDataList = snapshot.docs.map((doc) => doc.data().data);
//       setDataList(newDataList);
//     });
//   }, []);

//   //   code for waiting room
//   const [isWaiting, setIsWaiting] = useState(false);

//   const adddetails = async (e) => {
//     e.preventDefault();

//     console.log("datalist", dataList[0]);
//     console.log("enteredcode", enteredcode);

//     dataList[0] = dataList[0].toString();

//     if (dataList.length > 0 && enteredcode === dataList[0]) {
//       try {
//         const studentId = enteredname.toLowerCase();
//         await db.collection("studentenroll").doc(studentId).set({
//           code: enteredcode,
//           name: enteredname,
//           status: "waiting",
//           id: studentId,
//           score: 0,
//         });
//          localStorage.setItem("studentId", studentId);
//         setIsWaiting(true);
//         window.location.href = "/waitingroom";
//       } catch (error) {
//         console.error("Error saving data:", error);
//       }
//     } else {
//       alert("you entered wrong code");
//     }
//     setEnteredCode("");
//     setEnteredname("");
//   };

//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">
//               <img
//                 className="img"
//                 src="https://cdn-icons-png.flaticon.com/256/11826/11826847.png"
//                 alt=""
//               />
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="main-item">
//         <input
//           type="number"
//           placeholder="Enter code here"
//           className="inputtext"
//           value={enteredcode}
//           onChange={(e) => {
//             setEnteredCode(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Enter your name"
//           className="inputtext"
//           value={enteredname}
//           onChange={(e) => {
//             setEnteredname(e.target.value);
//           }}
//         />
//         <button onClick={adddetails}>START QUIZ</button>
//       </div>
//     </div>
//   );
// }
// export default StudentPortal;
