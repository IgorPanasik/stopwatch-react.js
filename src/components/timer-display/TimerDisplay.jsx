import "./timer-display.css";

export default function TimerDisplay({ time }) {
  const formatTime = () => {
    const totalSeconds = Math.floor(time / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = time % 1000;

    return `${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} : ${seconds
      .toString()
      .padStart(2, "0")} : ${Math.floor(milliseconds / 10)
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="display">
      <p className="format-time">{formatTime()}</p>
    </div>
  );
}
