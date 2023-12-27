import React, { useState, useRef } from "react";
import TimerDisplay from "../timer-display/TimerDisplay.jsx";
import TimerControls from "../timer-controls/TimerControls.jsx";
import "./wrapper-container.css";

function Timer() {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  const frame = () => {
    setTime(performance.now() - startTimeRef.current);
    rafRef.current = requestAnimationFrame(frame);
  };

  const handleStartStop = () => {
    if (isActive) {
      cancelAnimationFrame(rafRef.current);
    } else {
      startTimeRef.current = performance.now() - time;
      rafRef.current = requestAnimationFrame(frame);
    }
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    cancelAnimationFrame(rafRef.current);
    setIsActive(false);
    setTime(0);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="line"></div>
        <TimerDisplay time={time} />
        <TimerControls
          isActive={isActive}
          handleStartStop={handleStartStop}
          resetTimer={resetTimer}
        />
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Timer;
