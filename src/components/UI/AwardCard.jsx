import React from 'react';

export default function AwardCard(props) {
  const { name, count, years } = props.award;

  return (
    <div className='award-card'>
      <div className='front'>
        <h3>{name}</h3>
        <p>{count}x</p>
      </div>
      <div className='back'>
        <h3>Year(s) Won:</h3>
        <p>{years.join(', ')}</p>
      </div>
    </div>
  );
}