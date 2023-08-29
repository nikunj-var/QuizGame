import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useNavigate } from "react-router-dom";
import db from "./FireBase";
import { Link } from "react-router-dom";

function TeacherPortal() {
  const navigate = useNavigate();

  const [text, settextfield] = useState("******");
  const [dataStored, setDataStored] = useState(false);
  const handleDataSubmit = async () => {
    // Update data in Firestore
    await db.collection("singlecode").doc("singlevalue").set({
      data: text,
    });
    setDataStored(true);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/test">
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
        {text}
        <button
          onClick={() => {
            const min = 100000;
            const max = 999999;
            const random = Math.floor(Math.random() * (max - min + 1));
            settextfield(random);
          }}
        >
          GENERATE CODE
        </button>
        <br></br>
        <Link to="/teacherdashboard">
          <button onClick={handleDataSubmit}>
            {dataStored ? "Data Updated" : "Submit Code"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TeacherPortal;
