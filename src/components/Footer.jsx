import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Kevin Spinks. All rights reserved.</p>
    </footer>
  );
}