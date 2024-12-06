import React from 'react';

export default function AwardCard(props) {
  // Destructure the award object from props for easier access to its properties
  const { name, count, years } = props.award;

  return (
    <div className='award-card'>
      <div className='front'>
        <h3>{name}</h3>
        <p>{count}x</p>

        {/* Icon indicating interactivity */}
        <span className='icon' aria-label='clickable'>
          <i className="fa-solid fa-arrows-rotate"></i>
        </span>
      </div>

      {/* Back of the card displaying the years the award was won */}
      <div className='back'>
        <h3>Year(s) Won:</h3>

        {/* Joins the array of years into a comma-separated string for display */}
        <p>{years.join(', ')}</p>
      </div>
    </div>
  );
}
