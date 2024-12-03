import React from 'react'

export default function Hero({ playerData }) {
  const {
    first_name: fName,
    last_name: lName,
    height,
    weight,
    jersey_number: jersey,
    position,
    school_name: school
  } = playerData;

  const player = { fName, lName, height, weight, jersey, position, school };

  return (
    <section className='hero-section'>
      <div className='hero-container'>
        <div className='hero-left'>
          <h1>{player.fName}</h1>
          <h1>{player.lName}</h1>
          <h3>{player.jersey} | {player.position === 'G'? 'Guard' : 'Position'}</h3>
        </div>
        <div className='hero-center'>
          <img className='headshot' src='/assets/dame.webp' alt="Damian Lillard Headshot" />
          <img className='logo' src='/assets/bucks.webp' alt='Milwaukee Bucks Logo' />
        </div>
        <div className='hero-right'>
          <h5>Height: {player.height}</h5>
          <h5>Weight: {player.weight}</h5>
          <h5>Age: 34</h5>
          <h5>Country: USA</h5>
        </div>
      </div>
    </section>
  )
}