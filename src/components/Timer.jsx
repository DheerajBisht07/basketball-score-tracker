import React, { useEffect, useState } from 'react';

const Timer = ({ time, setTime, isRunning, setIsRunning }) => {
  const [customTime, setCustomTime] = useState('');

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

  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(600);
    setCustomTime('');
  };

  const handleSetCustomTime = () => {
    if (!customTime) return;
    
    const timeInSeconds = parseInt(customTime);
    
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      alert('Please enter a valid time in seconds');
      return;
    }
    
    if (timeInSeconds > 600) {
      alert('Time cannot exceed 10 minutes (600 seconds)');
      return;
    }
    
    setTime(timeInSeconds);
    setCustomTime('');
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and empty string
    if (value === '' || /^\d+$/.test(value)) {
      setCustomTime(value);
    }
  };

  return (
    <div className="timer-container text-center">
      <h5 className="mb-2">Game Clock</h5>
      <div className="timer-display mb-2">{formatTime(time)}</div>
      
      {/* Toggle and Reset Buttons */}
      <div className="d-flex justify-content-center gap-1 flex-wrap mb-2">
        <button 
          className={`btn btn-sm control-btn ${isRunning ? 'btn-warning' : 'btn-success'}`}
          onClick={toggleTimer}
          disabled={time === 0}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button 
          className="btn btn-sm btn-danger control-btn" 
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      
      {/* Custom Time Input */}
      <div className="custom-time-section">
        <div className="input-group input-group-sm mb-1">
          <input
            type="text"
            className="form-control"
            placeholder="Seconds (max 600)"
            value={customTime}
            onChange={handleTimeChange}
            maxLength="3"
          />
          <button 
            className="btn btn-info"
            onClick={handleSetCustomTime}
            disabled={!customTime}
          >
            Set
          </button>
        </div>
        <small className="text-white-50">Max: 10 minutes (600s)</small>
      </div>
    </div>
  );
};

export default Timer;