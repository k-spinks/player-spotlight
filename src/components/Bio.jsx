import React from 'react';
import { socialMedia } from '../data/data';

export default function Bio() {
  return (
    <section id="bio" className="bio-section">
      <div className="bio-wrapper">
        <div className="bio-text">
          <h2 className='section-heading'>Biography</h2>
          <p>
            Damian Lillard is a professional basketball player for the Milwaukee Bucks born in Oakland, CA. He played college basketball for the Weber State Wildcats and earned All-American honors in 2012. The Portland Trailblazers selected Lillard with the sixth overall pick in the 2012 NBA draft. Lillard has received five NBA All-Star selections and is one of the best point guards in the league.
          </p>
        </div>
        <div className="bio-social-links">
          <h3>Connect with Damian</h3>
          <ul>

            {/* Map over the social media data and create a list item for each platform */}
            {Object.entries(socialMedia).map(([platform, { url, icon }]) => (
              <li key={platform}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <i className={icon}></i> {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}