import React from 'react';
import  './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="headerName">Mohammad Sopyan</h1>
        <h2 className="headerTitle">
          Software Engineer • Learner • AI Enthusiast
        </h2>
        <nav className="nav">
          <a href="mailto:mohammedsopyan@gmail.com?subject=Hello%20Sopyan" className="navLink" target="_blank"> ▶ Send me an&nbsp;<span className="highlight">Email</span></a>
          <a href="https://id.linkedin.com/in/sopyanalansory" className="navLink" target="_blank"> ▶ Connect on&nbsp;<span className="highlight">LinkedIn</span></a>
          <a href="https://www.youtube.com/@sopyanalansory" className="navLink" target="_blank"> ▶ Tutorials on&nbsp;<span className="highlight">YouTube</span></a>
          <a href="https://x.com/sopyanalansory" className="navLink" target="_blank"> ▶ Follow me on&nbsp;<span className="highlight">Twitter</span></a>
          <a href="https://bronze-lonee-18.tiiny.site" className="navLink" target="_blank"> ▶ Check my&nbsp;<span className="highlight">Curriculum Vitae</span></a>
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