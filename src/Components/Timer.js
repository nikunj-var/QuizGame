import React, { useState, useEffect } from "react";

function Timer() {
  const initialSeconds =
    parseInt(sessionStorage.getItem("remainingTime")) || 100;
  const [seconds, setSeconds] = useState(initialSeconds);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(intervalId); // Clear the interval
        setRedirectToDashboard(true);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds]);

  useEffect(() => {
    sessionStorage.setItem("remainingTime", seconds.toString());
  }, [seconds]);

  if (redirectToDashboard) {
    window.location.href = "/studentdashboard"; // Redirect manually
    return null; // Render nothing
  }

  return <p>Time remaining: {seconds} seconds</p>;
}

export default Timer;
