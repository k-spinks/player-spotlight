import React from 'react';
import AwardCard from './UI/AwardCard';
import { awards } from '../data/data';

export default function Awards() {
  // Destructure the awards object for easier and cleaner access to individual awards
  const {
    allNBA,
    allRookieTeam,
    nbaPlayerOfTheMonth,
    nbaPlayerOfTheWeek,
    nbaRookieOfTheMonth,
    nbaRookieOfTheYear,
  } = awards;

  return (
    <section id='awards' className="awards-section">
      <h2 className="section-heading">Player Awards</h2>

      {/* Grid container to layout AwardCards in a structured format */}
      <div className="awards-grid">
        {/* Rendering an AwardCard for each award, passing the respective award data as props */}
        <AwardCard award={allNBA} />
        <AwardCard award={allRookieTeam} />
        <AwardCard award={nbaPlayerOfTheMonth} />
        <AwardCard award={nbaPlayerOfTheWeek} />
        <AwardCard award={nbaRookieOfTheMonth} />
        <AwardCard award={nbaRookieOfTheYear} />
      </div>
    </section>
  );
}
