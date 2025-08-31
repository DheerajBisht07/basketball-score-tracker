import React, { useEffect, useState } from 'react';

// Shot Clock Component with Buzzer Sound (without useRef)
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

  // Separate effect for buzzer sound when shotClock hits 0
  useEffect(() => {
    if (shotClock === 0) {
      // Play the buzzer sound
      audio.currentTime = 0;
      audio.play().catch(e => console.log("Audio play failed:", e));
      
      // Reset the shot clock after a short delay to allow the sound to play
      setTimeout(() => setShotClock(24), 1000);
    }
  }, [shotClock, setShotClock, audio]);

  const resetShotClock = () => {
    setShotClock(24);
  };

  return (
    <div className="shotclock-container text-center">
      <h5 className="mb-2">Shot Clock</h5>
      {/* shot clock is hidden uncomment to shot clock  */}
      {/* <div className="shotclock-display mb-2">{shotClock}</div> */}
      <div className="d-flex justify-content-center gap-1">
        <button 
          className="btn btn-sm btn-primary control-btn" 
          onClick={resetShotClock}
        >
          Reset
        </button>
        <button 
          className="btn btn-sm btn-info control-btn" 
          onClick={() => setShotClock(14)}
        >
          Set to 14
        </button>
      </div>
    </div>
  );
};

export default ShotClock;