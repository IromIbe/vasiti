import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
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
            <Link to='login'>
              <button>Log In</button>
            </Link>
          </li>
          <li className='link'>
            <button className='color'>Sign Up</button>
          </li>
          <li className='mobile-link'>
            <Link to='login'>
              <button className='color'>Log In</button>
            </Link>
          </li>
          <li className='mobile-link'>
            <button className='color'>Sign Up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
