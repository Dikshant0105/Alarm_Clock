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
      });
      setCurrentTime(timeString);
      console.log(currentTime)

      if (alarmSet && timeString === alarmTime) {
        alert("Alarm!");
        setAlarmSet(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmSet, alarmTime]);

  const handleAlarmTimeChange = (event) => {
    setAlarmTime(event.target.value);
    onTimeChange();
    console.log(alarmTime)
  };

  const handleSetAlarm = () => {
    setAlarmSet(true);
  };

  var inputEle = document.getElementById('timeInput');

  function onTimeChange() {
  var timeSplit = inputEle.value.split(':'),
    hours,
    minutes,
    meridian;
  hours = timeSplit[0];
  minutes = timeSplit[1];
  if (hours > 12) {
    meridian = 'PM';
    hours -= 12;
  } else if (hours < 12) {
    meridian = 'AM';
    if (hours == 0) {
      hours = 12;
    }
  } else {
    meridian = 'PM';
  }
  console.log(hours + ':' + minutes + ' ' + meridian);
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
          id="timeInput"
        />
        <button onClick={handleSetAlarm}>Set</button>
      </div>
    </div>
  );
}

export default AlarmClock;
