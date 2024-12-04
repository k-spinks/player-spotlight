import React from 'react';
import AwardCard from './UI/AwardCard';
import { motion } from 'framer-motion';
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
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Player Awards
      </motion.h2>
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
