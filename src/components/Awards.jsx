import React from 'react';
import AwardCard from './UI/AwardCard';
import { awards } from '../data/data';

export default function Awards() {
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
      <div className="awards-grid">
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
