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
  const [showNameModal, setShowNameModal] = useState(false);
  const [tempHomeName, setTempHomeName] = useState(homeTeamName);
  const [tempAwayName, setTempAwayName] = useState(awayTeamName);
  const [errorMessage, setErrorMessage] = useState('');

  const resetAll = () => {
    setHomeScore(0);
    setAwayScore(0);
    setTime(600);
    setShotClock(24);
    setIsTimerRunning(false);
  };

  const handleSaveNames = () => {
    // Validate team names
    if (!tempHomeName.trim() || !tempAwayName.trim()) {
      setErrorMessage('Team names cannot be empty');
      return;
    }
    
    if (tempHomeName.trim().toLowerCase() === tempAwayName.trim().toLowerCase()) {
      setErrorMessage('Team names cannot be the same');
      return;
    }
    
    // If validation passes, save the names
    setHomeTeamName(tempHomeName.trim());
    setAwayTeamName(tempAwayName.trim());
    setErrorMessage('');
    setShowNameModal(false);
  };

  const handleOpenModal = () => {
    setTempHomeName(homeTeamName);
    setTempAwayName(awayTeamName);
    setErrorMessage('');
    setShowNameModal(true);
  };

  const handleCloseModal = () => {
    setShowNameModal(false);
    setErrorMessage('');
  };

  return (
    <>
      <div className="controls-container text-center">
        <h3 className="mb-3">Game Controls</h3>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <button 
            className="btn btn-primary control-btn flex-fill" 
            onClick={handleOpenModal}
          >
            Set Team Names
          </button>
          <button 
            className="btn btn-danger control-btn flex-fill" 
            onClick={resetAll}
          >
            Reset Game
          </button>
          <button 
            className="btn btn-secondary control-btn flex-fill" 
            onClick={() => {
              setHomeScore(0);
              setAwayScore(0);
            }}
          >
            Reset Scores
          </button>
          <button 
            className="btn btn-warning control-btn flex-fill" 
            onClick={() => {
              setTime(600);
              setShotClock(24);
              setIsTimerRunning(false);
            }}
          >
            Reset Clock
          </button>
        </div>
      </div>

      {/* Team Name Modal */}
      {showNameModal && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Set Team Names</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <div className="mb-3">
                  <label htmlFor="homeTeamName" className="form-label">Home Team Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="homeTeamName"
                    value={tempHomeName}
                    onChange={(e) => setTempHomeName(e.target.value)}
                    placeholder="Enter home team name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="awayTeamName" className="form-label">Away Team Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="awayTeamName"
                    value={tempAwayName}
                    onChange={(e) => setTempAwayName(e.target.value)}
                    placeholder="Enter away team name"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSaveNames}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Controls;