import React, { useEffect } from 'react';

const ShotClock = ({ shotClock, setShotClock, isTimerRunning }) => {
  useEffect(() => {
    let interval = null;
    
    if (isTimerRunning && shotClock > 0) {
      interval = setInterval(() => {
        setShotClock(prev => prev - 1);
      }, 1000);
    } else if (shotClock === 0) {
      // Handle shot clock violation
      setShotClock(24); // Reset shot clock
    }
    
    return () => clearInterval(interval);
  }, [isTimerRunning, shotClock, setShotClock]);

  const resetShotClock = () => {
    setShotClock(24);
  };

  return (
    <div className="shotclock-container text-center">
      <h3 className="mb-3">Shot Clock</h3>
      <div className="shotclock-display mb-3">{shotClock}</div>
      <div className="d-flex justify-content-center gap-2">
        <button 
          className="btn btn-primary control-btn" 
          onClick={resetShotClock}
        >
          Reset
        </button>
        <button 
          className="btn btn-info control-btn" 
          onClick={() => setShotClock(14)}
        >
          Set to 14
        </button>
      </div>
    </div>
  );
};

export default ShotClock;