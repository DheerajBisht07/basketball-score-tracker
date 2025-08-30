import React, { useEffect } from 'react';

const ShotClock = ({ shotClock, setShotClock, isTimerRunning }) => {
  useEffect(() => {
    let interval = null;
    
    if (isTimerRunning && shotClock > 0) {
      interval = setInterval(() => {
        setShotClock(prev => prev - 1);
      }, 1000);
    } else if (shotClock === 0) {
      setShotClock(24);
    }
    
    return () => clearInterval(interval);
  }, [isTimerRunning, shotClock, setShotClock]);

  const resetShotClock = () => {
    setShotClock(24);
  };

  return (
    <div className="shotclock-container text-center">
      <h5 className="mb-2">Shot Clock</h5>
      <div className="shotclock-display mb-2">{shotClock}</div>
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