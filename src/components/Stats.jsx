import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { statsAnimation } from '../data/animation';
import { seasonalStats, careerStats } from '../data/data';

export default function Stats() {
  const [flip, setFlip] = useState(true);

  return (
    <section className='stats-section'>
      <div className='stats-container'>
        <h1>Stats</h1>
        <div>
          <motion.img
            className="stats-img"
            src="/assets/dame2.jpeg"
            alt="Damian Lillard Jumpshot"
            {...statsAnimation}
          />
        </div>
        <div className='stats-sheet'>
          <h2>{flip ? 'Seasonal' : 'Career'}</h2>
          <div className='stats-bubble'>
            <div className="stat">
              <p>{flip ? seasonalStats.pointsPerGame : careerStats.pointsPerGame - 2}</p>
              <h4>PPG</h4>
            </div>
          </div>
          <div className='stats-bubble'>
            <div className="stat">
              <p>{flip ? seasonalStats.assistsPerGame : careerStats.assistsPerGame - 1}</p>
              <h4>APG</h4>
            </div>
          </div>
          <div className='stats-bubble'>
            <div className="stat">
              <p>{flip ? seasonalStats.reboundsPerGame : careerStats.reboundsPerGame - 0.5}</p>
              <h4>RPG</h4>
            </div>
          </div>
          <div className='stats-bubble'>
            <div className="stat">
              <p>{flip ? seasonalStats.fieldGoalPercentage : careerStats.fieldGoalPercentage - 5}%</p>
              <h4>FG%</h4>
            </div>
          </div>
          <div>
            <div className="arrow-toggle" onClick={() => setFlip((prevState) => !prevState)}>
              <motion.i
                className="arrow"
                initial={{ rotate: 0 }}
                animate={{ rotate: flip ? 0 : 180 }}
                transition={{ duration: 0.4 }}
              >
                ➔
              </motion.i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
