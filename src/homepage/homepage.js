import React from "react";
import "./homepage.style.scss";

function Homepage() {
  return (
    <div className='home'>
      <nav className='nav-bar'>
        <div className='logo'>
          <img src='/assets/vasiti-logo.svg' alt='' />
        </div>
        <div className='nav-links'>
          <ul className='links'>
            <li className='link'>
              <button href='#'>About Us</button>
            </li>
            <li className='link'>
              <button>Stories</button>
            </li>
            <li className='link'>
              <button>Contact</button>
            </li>
            <li className='link'>
              <button>Log In</button>
            </li>
            <li className='link'>
              <button className='color'>Sign Up</button>
            </li>
          </ul>
        </div>
      </nav>
      <div className='heading'>
        <li className='sub-link'>
          <button>MARKETPLACE</button>
        </li>
        <li className='sub-link'>
          <button>WHOLESALE CENTER</button>
        </li>
        <li className='sub-link'>
          <button>SELLER CENTER</button>
        </li>
        <li className='sub-link'>
          <button>SERVICES</button>
        </li>
        <li className='sub-link'>
          <button>INTERNSHIPS</button>
        </li>
        <li className='sub-link'>
          <button>EVENTS</button>
        </li>
      </div>
    </div>
  );
}

export default Homepage;
