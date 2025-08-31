import React, { useState } from 'react';

const Controls = ({
  setHomeScore,
  setAwayScore,
  setTime,
  setShotClock,
  setIsTimerRunning,
  setHomeTeamName,
  setAwayTeamName,
  homeTeamName,
  awayTeamName
}) => {
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [newHomeTeam, setNewHomeTeam] = useState(homeTeamName);
  const [newAwayTeam, setNewAwayTeam] = useState(awayTeamName);
  const [customGameTime, setCustomGameTime] = useState('');
  const [customShotTime, setCustomShotTime] = useState('');

  const updateTeamNames = () => {
    setHomeTeamName(newHomeTeam);
    setAwayTeamName(newAwayTeam);
    setShowTeamModal(false);
  };

  const setCustomGameClock = () => {
    const timeInSeconds = parseInt(customGameTime);
    
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      alert('Please enter a valid time in seconds');
      return;
    }
    
    if (timeInSeconds > 600) {
      alert('Time cannot exceed 10 minutes (600 seconds)');
      return;
    }
    
    setTime(timeInSeconds);
    setCustomGameTime('');
    setShowTimeModal(false);
  };

  const setCustomShotClockTime = () => {
    const timeInSeconds = parseInt(customShotTime);
    
    if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
      alert('Please enter a valid time');
      return;
    }
    
    if (timeInSeconds > 24) {
      alert('Shot clock cannot exceed 24 seconds');
      return;
    }
    
    setShotClock(timeInSeconds);
    setCustomShotTime('');
    setShowTimeModal(false);
  };

  return (
    <div className="controls-container">
      <div className="d-grid gap-2">
        <button 
          className="btn btn-outline-light btn-sm"
          onClick={() => setShowTeamModal(true)}
        >
          Change Team Names
        </button>
        <button 
          className="btn btn-outline-info btn-sm"
          onClick={() => setShowTimeModal(true)}
        >
          Set Custom Times
        </button>
        <button 
          className="btn btn-outline-warning btn-sm"
          onClick={() => {
            setHomeScore(0);
            setAwayScore(0);
            setTime(600);
            setShotClock(24);
            setIsTimerRunning(false);
          }}
        >
          Reset Game
        </button>
      </div>

      {/* Team Name Modal */}
      {showTeamModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5 className="mb-3">Change Team Names</h5>
            <div className="mb-3">
              <label className="form-label">Home Team</label>
              <input 
                type="text" 
                className="form-control"
                value={newHomeTeam}
                onChange={(e) => setNewHomeTeam(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Away Team</label>
              <input 
                type="text" 
                className="form-control"
                value={newAwayTeam}
                onChange={(e) => setNewAwayTeam(e.target.value)}
              />
            </div>
            <div className="d-flex gap-2">
              <button 
                className="btn btn-primary"
                onClick={updateTeamNames}
              >
                Save
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => setShowTeamModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Time Settings Modal */}
      {showTimeModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h5 className="mb-3">Set Custom Times</h5>
            
            <div className="mb-3">
              <label className="form-label">Game Clock (seconds, max 600)</label>
              <input 
                type="number" 
                className="form-control"
                value={customGameTime}
                onChange={(e) => setCustomGameTime(e.target.value)}
                min="1"
                max="600"
                placeholder="Enter seconds"
              />
              <div className="d-grid mt-2">
                <button 
                  className="btn btn-info btn-sm"
                  onClick={setCustomGameClock}
                  disabled={!customGameTime}
                >
                  Set Game Clock
                </button>
              </div>
            </div>
            
            <div className="mb-3">
              <label className="form-label">Shot Clock (seconds, max 24)</label>
              <input 
                type="number" 
                className="form-control"
                value={customShotTime}
                onChange={(e) => setCustomShotTime(e.target.value)}
                min="1"
                max="24"
                placeholder="Enter seconds"
              />
              <div className="d-grid mt-2">
                <button 
                  className="btn btn-info btn-sm"
                  onClick={setCustomShotClockTime}
                  disabled={!customShotTime}
                >
                  Set Shot Clock
                </button>
              </div>
            </div>
            
            <div className="d-flex gap-2">
              <button 
                className="btn btn-secondary"
                onClick={() => setShowTimeModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Controls;