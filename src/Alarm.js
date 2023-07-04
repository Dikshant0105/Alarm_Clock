import React, { useState, useEffect } from "react";

function AlarmClock() {
  const [currentTime, setCurrentTime] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [alarmSet, setAlarmSet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(timeString);

      if (alarmSet && timeString === alarmTime) {
        alert("Alarm!");
        setAlarmSet(false);
      }
      console.log("Timestring: " + timeString)
      console.log("Alarm set: " + alarmSet)
      console.log("Alarm Time: " + alarmTime)
      
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmSet, alarmTime]);
  

  const handleAlarmTimeChange = (event) => {
    setAlarmTime(event.target.value);
  };

  const handleSetAlarm = () => {
    setAlarmSet(true);
  };

  return (
    <div>
      <h2>Alarm Clock</h2>
      <p>Current Time: {currentTime}</p>
      <div>
        <label>Set Alarm: </label>
        <input
          type="time"
          value={alarmTime}
          onChange={handleAlarmTimeChange}
        />
        <button onClick={handleSetAlarm}>Set</button>
      </div>
    </div>
  );
}

export default AlarmClock;
