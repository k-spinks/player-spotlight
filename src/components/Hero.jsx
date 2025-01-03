import React from 'react';
import { motion } from 'framer-motion';
import {
  heroCenterAnimation,
  headshotAnimation,
  logoAnimation,
} from '../data/animation.js';

export default function Hero({ playerData }) {
  // Extracting player data from props for better readability and usage
  const {
    first_name: fName,
    last_name: lName,
    height,
    weight,
    jersey_number: jersey,
    position,
    school_name: school,
  } = playerData;

  // Creating a single object to organize player details for reuse in JSX
  const player = { fName, lName, height, weight, jersey, position, school };

  return (
    <section id='home' className="hero-section">
      <div className="hero-container page-container">
        <div className="hero-left">
          <div>
            <h1>{player.fName}</h1>
            <h1>{player.lName}</h1>
          </div>
          <h3>
            {player.jersey} | {player.position === 'G' ? 'Guard' : 'Position'}
          </h3>
        </div>
        <motion.div
          className="hero-center"
          initial={heroCenterAnimation.initial}
          animate={heroCenterAnimation.animate}
          transition={heroCenterAnimation.transition}
        >
          {/* Animated headshot of the player */}
          <motion.img
            className="headshot"
            src="/assets/dame.webp"
            alt="Damian Lillard Headshot"
            {...headshotAnimation}
          />

          {/* Animated team logo */}
          <motion.img
            className="logo"
            src="/assets/bucks.webp"
            alt="Milwaukee Bucks Logo"
            {...logoAnimation}
          />
        </motion.div>

        {/* Right side of the hero section displaying additional player details */}
        <div className="hero-right">
          <h5>Height: {player.height}</h5>
          <h5>Weight: {player.weight}</h5>
          <h5>Age: 34</h5>
          <h5>Country: USA</h5>
        </div>
      </div>
    </section>
  );
}
