import React, { useState } from 'react';
import { seasonalStats, careerStats } from '../data/data';


export default function Stats() {

  // Set the initial state of flip to true for conditional rendering
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
        <div className='stats-sheet'>
          <h3>{flip ? 'Seasonal' : 'Career'}</h3>
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
          <div>
            <div className="arrow-toggle" onClick={() => setFlip((prevState) => !prevState)}>
              <i className="arrow">➔</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
