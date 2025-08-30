import React, { useState } from 'react';

const TeamFoul = () => {
  const [homeFouls, setHomeFouls] = useState(0);
  const [awayFouls, setAwayFouls] = useState(0);

  const updateFouls = (team, change) => {
    if (team === 'home') {
      setHomeFouls(prev => Math.max(0, Math.min(5, prev + change)));
    } else {
      setAwayFouls(prev => Math.max(0, Math.min(5, prev + change)));
    }
  };

  const resetFouls = () => {
    setHomeFouls(0);
    setAwayFouls(0);
  };

  const getFoulColor = (foulCount) => {
    if (foulCount >= 5) return 'text-danger'; // Red for 5+ fouls
    if (foulCount >= 4) return 'text-warning'; // Yellow for 4 fouls
    return 'text-white'; // White for less than 4
  };

  return (
    <div className="team-foul-container p-3 mb-3">
      <div className="row align-items-center">
        {/* Header */}
        <div className="col-12 text-center mb-2">
          <h5 className="mb-0">Team Fouls</h5>
        </div>
        
        {/* Home Team Fouls */}
        <div className="col-5 text-end">
          <div className="team-foul-display mb-2">
            <span className={`foul-count ${getFoulColor(homeFouls)}`}>
              {homeFouls}
            </span>
          </div>
          <div className="d-grid gap-1">
            <button 
              className="foul-btn btn-sm btn-success" 
              onClick={() => updateFouls('home', 1)}
              disabled={homeFouls >= 5}
            >
              +1 Foul
            </button>
            <button 
              className="foul-btn btn-sm btn-danger" 
              onClick={() => updateFouls('home', -1)}
            >
              -1 Foul
            </button>
          </div>
        </div>
        
        {/* VS Separator */}
        <div className="col-2 text-center">
          <div className="text-white fw-bold">VS</div>
        </div>
        
        {/* Away Team Fouls */}
        <div className="col-5 text-start">
          <div className="team-foul-display mb-2">
            <span className={`foul-count ${getFoulColor(awayFouls)}`}>
              {awayFouls}
            </span>
          </div>
          <div className="d-grid gap-1">
            <button 
              className="foul-btn btn-sm btn-success" 
              onClick={() => updateFouls('away', 1)}
              disabled={awayFouls >= 5}
            >
              +1 Foul
            </button>
            <button 
              className="foul-btn btn-sm btn-danger" 
              onClick={() => updateFouls('away', -1)}
            >
              -1 Foul
            </button>
          </div>
        </div>
        
        {/* Reset Button */}
        <div className="col-12 text-center mt-2">
          <button 
            className="btn btn-sm btn-outline-warning"
            onClick={resetFouls}
          >
            Reset All Fouls
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamFoul;