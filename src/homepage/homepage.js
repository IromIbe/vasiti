import React, { useState } from "react";
import "./homepage.style.scss";
import Header from "../header/header";
import Review from "../review/review";
import Footer from "../footer/footer";
import ThreadModal from "../modal/modal";

function Homepage() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className='home'>
      <Header />
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
          <p className='me-3'>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className='pic px-me-5 d-flex justify-content-center align-items-center'>
          <img src='/assets/intro-pic.svg' alt='' />
        </div>
      </div>
      <div className='experience pt-5  mt-md-3'>
        <div className='pic mx-5'>
          <img src='/assets/ladies.svg' alt='' width='500px' />
        </div>
        <div className='experience-text d-flex flex-column justify-content-start'>
          <h4>Tolu & Joy’s Experience</h4>
          <button>CUSTOMER</button>
          <p className='mt-4'>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definitely be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definitely be coming back!
          </p>
          <div className='line' onClick={() => handleShow()}>
            <p>Share your own story!</p>
            <img src='/assets/line.svg' alt='' />
          </div>
          <ThreadModal show={show} handleClose={handleClose} />
        </div>
      </div>
      <div className='review mt-3 d-flex flex-column justify-content-center '>
        <Review firstTestimonies />
      </div>
      <div className='experience vendor pt-5  mt-md-3 px-2'>
        <div className='vendor-text mx-5 px-5 d-flex flex-column justify-content-start'>
          <h4 className='my-2'>Josiah’s Experience</h4>
          <button>CUSTOMER</button>
          <p className='mt-4'>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <div className='line' onClick={() => handleShow()}>
            <p>Share your own story!</p>
            <img src='/assets/line.svg' alt='' />
          </div>
        </div>
        <div className='pic mx-5'>
          <img src='/assets/woman-shopping.svg' alt='' width='500px' />
        </div>
      </div>
      <div className='review mt-3 d-flex flex-column justify-content-center '>
        <Review lastTestimonies />
        <div className='footer mt-5'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
