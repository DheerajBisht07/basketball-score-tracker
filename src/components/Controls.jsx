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
  const [newHomeTeam, setNewHomeTeam] = useState(homeTeamName);
  const [newAwayTeam, setNewAwayTeam] = useState(awayTeamName);

  const updateTeamNames = () => {
    setHomeTeamName(newHomeTeam);
    setAwayTeamName(newAwayTeam);
    setShowTeamModal(false);
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
    </div>
  );
};

export default Controls;