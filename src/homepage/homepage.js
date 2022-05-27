import React from "react";
import "./homepage.style.scss";
import Header from "../header/header";

function Homepage() {
  return (
    <div className='home'>
      <Header/>
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

      <div className='space d-md-flex justify-content-md-center mt-xs-5 mt-md-3  align-items-md-center px-md-5'>
        <div className='text ms-md-5 ps-md-4 t-xs-5'>
          <h4>
            Amazing <br></br> Experiences from Our Wonderful Customers
          </h4>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className='pic px-me-5 d-flex justify-content-center align-items-center'>
          <img src='/assets/intro-pic.svg' alt='' />
        </div>
      </div>
      <div className='experience d-flex justify-content-md-center mt-xs-5 mt-md-3  align-items-md-center'></div>
    </div>
  );
}

export default Homepage;
