import React, { useState } from 'react';
import { seasonalStats, careerStats } from '../data/data';

export default function Stats() {

  // useState is used to toggle between displaying seasonal stats and career stats.
  // Initially, 'flip' is set to true, meaning the component will display seasonal stats by default.
  
  const [flip, setFlip] = useState(true);

  return (
    <section id='stats' className='stats-section'>
      <h2 className='section-heading'>Player Stats</h2>
      <div className='stats-wrapper'>
        <img
          className="stats-img"
          src="/assets/dame2.jpeg"
          alt="Damian Lillard Jumpshot"
        />

        {/* The stats-sheet contains the toggle (Seasonal vs Career) and the individual stats */}
        <div className='stats-sheet'>
          <div>
            <h3>{flip ? 'Seasonal' : 'Career'}</h3>

            {/* Button to toggle between seasonal and career stats */}
            <div

            // Toggles the 'flip' state when clicked.
            onClick={() => setFlip((prevState) => !prevState)}
              className="arrow-toggle"
            >
              {/* Icon indicating the toggle functionality */}
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
          </div>
          <div className='stats-bubble'>
            <div className="stat">
              <p>{flip ? seasonalStats.pointsPerGame : careerStats.pointsPerGame - 2}</p>
              <h4>PPG</h4>
            </div>
          </div>

          <div className='stats-bubble'>
            <div className="stat">
              <p>{flip ? seasonalStats.assistsPerGame : careerStats.assistsPerGame}</p>
              <h4>APG</h4>
            </div>
          </div>

          <div className='stats-bubble'>
            <div className="stat">
              <p>{flip ? seasonalStats.reboundsPerGame : careerStats.reboundsPerGame}</p>
              <h4>RPG</h4>
            </div>
          </div>

          <div className='stats-bubble'>
            <div className="stat">
              <p>{flip ? seasonalStats.fieldGoalPercentage : careerStats.fieldGoalPercentage}%</p>
              <h4>FG%</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
