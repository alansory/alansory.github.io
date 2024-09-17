import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright © {new Date().getFullYear()} Mohammad Sopyan</p>
      <nav className="navFooter">
        <a href="https://twitter.com/sopyanalansory" className="navLink">Twitter</a> •
        <a href="https://youtube.com/sopyanalansory" className="navLink">YouTube</a> •
        <a href="https://github.com/alansory" className="navLink">GitHub</a> •
        <a href="https://linkedin.com/in/alansory" className="navLink">LinkedIn</a>
      </nav>
    </footer>
  );
}

export default Footer;