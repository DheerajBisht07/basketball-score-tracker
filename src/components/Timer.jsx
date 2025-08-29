import React, { useEffect } from 'react';

const Timer = ({ time, setTime, isRunning, setIsRunning }) => {
  useEffect(() => {
    let interval = null;
    
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    
    return () => clearInterval(interval);
  }, [isRunning, time, setTime, setIsRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(600); // Reset to 10 minutes
  };

  return (
    <div className="timer-container text-center">
      <h3 className="mb-3">Game Clock</h3>
      <div className="timer-display mb-3">{formatTime(time)}</div>
      <div className="d-flex justify-content-center gap-2">
        <button 
          className="btn btn-success control-btn" 
          onClick={() => setIsRunning(true)}
          disabled={isRunning || time === 0}
        >
          Start
        </button>
        <button 
          className="btn btn-warning control-btn" 
          onClick={() => setIsRunning(false)}
          disabled={!isRunning}
        >
          Pause
        </button>
        <button 
          className="btn btn-danger control-btn" 
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;