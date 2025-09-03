import React, { useState } from 'react';

const TeamFoul = () => {
  const [homeFouls, setHomeFouls] = useState(0);
  const [awayFouls, setAwayFouls] = useState(0);

  const updateFouls = (team, change) => {
    if (team === 'home') {
      setHomeFouls(prev => Math.max(0, prev + change));
    } else {
      setAwayFouls(prev => Math.max(0, prev + change));
    }
  };

  const resetFouls = () => {
    setHomeFouls(0);
    setAwayFouls(0);
  };

  const getFoulColorClass = (foulCount) => {
    if (foulCount >= 5) return 'text-danger';
    if (foulCount >= 4) return 'text-warning';
    return '';
  };

  const getFoulBackgroundClass = (foulCount) => {
    if (foulCount >= 5) return 'bg-danger';
    if (foulCount >= 4) return 'bg-warning';
    return '';
  };

  return (
    <div className="fouls-container mb-2">
      <div className="row">
        <div className="col-4">
          <div className="fouls">
            <div className="fouls-label small">TEAM FOULS</div>
            <div className={`fouls-count ${getFoulBackgroundClass(homeFouls)} ${getFoulColorClass(homeFouls)}`}>
              {homeFouls}
            </div>
          </div>
          <div className="d-grid gap-1 mt-1">
            <button className="btn btn-sm btn-success py-1" onClick={() => updateFouls('home', 1)}>
              +1
            </button>
            <button className="btn btn-sm btn-danger py-1" onClick={() => updateFouls('home', -1)}>
              -1
            </button>
          </div>
        </div>
        <div className="col-4 text-center">
          <button className="btn btn-sm btn-outline-warning mt-3 py-1" onClick={resetFouls}>
            Reset All
          </button>
        </div>
        <div className="col-4">
          <div className="fouls">
            <div className="fouls-label small">TEAM FOULS</div>
            <div className={`fouls-count ${getFoulBackgroundClass(awayFouls)} ${getFoulColorClass(awayFouls)}`}>
              {awayFouls}
            </div>
          </div>
          <div className="d-grid gap-1 mt-1">
            <button className="btn btn-sm btn-success py-1" onClick={() => updateFouls('away', 1)}>
              +1
            </button>
            <button className="btn btn-sm btn-danger py-1" onClick={() => updateFouls('away', -1)}>
              -1
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default TeamFoul;