import React from "react";
import "./homepage.style.scss";
import { Container, Row, Col } from "react-bootstrap";

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

        <div className='space d-md-flex justify-content-center mt-md-3 mt-sm-5 align-items-center px-md-5'>

          <div className='text justify-content-md-center ms-5 ps-4' >
            <h4>Amazing <br></br> Experiences from Our Wonderful Customers</h4>
            <p>
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </p>
          </div>
          <div className='pic px-me-5 d-flex justify-content-center align-items-center'>
            <img src='/assets/intro-pic.svg' alt='' />
          </div>
        </div>

    </div>
  );
}

export default Homepage;
