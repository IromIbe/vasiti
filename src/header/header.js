import React from "react";
import "./header.style.scss";

export default function Header() {
  return (
    <nav className='nav-bar'>
      <div className='logo'>
        <img src='/assets/vasiti-logo.svg' alt='' />
      </div>
      <div className='nav-links'>
        <ul className='links'>
          <li className='link'>
            <button>Home</button>
          </li>
          <li className='link'>
            <button>About Us</button>
          </li>
          <li className='link'>
            <button>Stories</button>
          </li>
          <li className='link'>
            <button>Contact</button>
          </li>
          <li className='link'>
            <button>
              <button>Log In</button>
            </button>
          </li>
          <li className='link'>
            <button className='color'>Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
