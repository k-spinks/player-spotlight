import React from 'react';
import { socialMedia } from '../data/data';

export default function Bio() {
  return (
    <section id="bio" className="bio-section">
      <div className="bio-wrapper">
        <div className="bio-text">
          <h2 className='section-heading'>Biography</h2>
          <p>
          Damian Lillard, a professional basketball player for the Milwaukee Bucks, was born in Oakland, California on July 15 1990. He played collegiate basketball at Weber State University, where he earned All-American honors in 2012. Selected as the sixth overall pick in the 2012 NBA Draft by the Portland Trail Blazers, Lillard has since established himself as one of the premier point guards in the league, earning numerous accolades including five NBA All-Star selections.
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