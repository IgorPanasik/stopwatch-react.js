import "./timer-controls.css";

export default function TimerControls({
  isActive,
  handleStartStop,
  resetTimer,
}) {
  return (
    <div className="container-buttons">
      <button
        className={`btn ${isActive ? "active" : ""}`}
        onClick={handleStartStop}
      >
        {isActive ? "Stop" : "Start"}
      </button>
      <button className="btn" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
}
