import React, { useEffect, useState } from 'react';

const ShotClock = ({ shotClock, setShotClock, isTimerRunning }) => {
  const [audio] = useState(new Audio(process.env.PUBLIC_URL + "/audio/shotClockBuzzer.mp3"));
  
  useEffect(() => {
    let interval = null;

    if (isTimerRunning && shotClock > 0) {
      interval = setInterval(() => {
        setShotClock(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isTimerRunning, shotClock, setShotClock]);

  useEffect(() => {
    if (shotClock === 0) {
      audio.currentTime = 0;
      audio.play().catch(e => console.log("Audio play failed:", e));
      setTimeout(() => setShotClock(24), 1000);
    }
  }, [shotClock, setShotClock, audio]);

  const resetShotClock = () => {
    setShotClock(24);
  };

  return (
    <div className="control-panel">
      <div className="control-title">Shot Clock Controls</div>
      <div className="button-grid">
        <button className="btn" onClick={resetShotClock}>
          Reset Shot Clock
        </button>
        <button className="btn" onClick={() => setShotClock(14)}>
          Set to 14
        </button>
      </div>
    </div>
  );
};

export default ShotClock;