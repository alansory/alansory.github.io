import React from 'react';
import  './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="name">Mohammad Sopyan</h1>
        <h2 className="title">
          Software Engineer • Learner • AI Enthusiast
        </h2>
        <nav className="nav">
          <a href="https://www.youtube.com/@sopyanalansory" className="navLink"> ▶ Tutorials on&nbsp;<span className="highlight">YouTube</span></a>
          <a href="https://x.com/sopyanalansory" className="navLink"> ▶ Follow me on&nbsp;<span className="highlight">Twitter</span></a>
          <a href="https://id.linkedin.com/in/sopyanalansory" className="navLink"> ▶ Connect on&nbsp;<span className="highlight">LinkedIn</span></a>
        </nav>
      </div>
      <div className="imageContainer">
        <img 
          src="profile-pic.png" 
          width={176} 
          height={176} 
          alt="Mohammad Sopyan" 
          className="profileImage"
        />
      </div>
    </header>
  );
}

export default Header;