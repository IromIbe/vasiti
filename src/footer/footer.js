/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.style.scss";
function Footer() {
  return (
    <div className='footer d-flex flex-column'>
      <div className='flex justify-content-center align-items-center'>
        <div className='subscribe d-flex mb-5 pb-4'>
          <div className='pic'>
            <img src='/assets/banner.svg' alt='' />
          </div>
          <div className='subscribe-info'>
            <h1>
              Be a member <br /> of our community 🎉
            </h1>
            <p>
              We’d make sure you’re always first to know what’s happening on
              Vasiti <br />
              —thus, the world.
            </p>
            <div className='send-mail d-flex justify-content-between align-items-center'>
              <input type='email' placeholder='enter your email address' />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className='Container '>
          <div className='Column'>
            <p className='Heading'>Company</p>
            <a className='FooterLink' href='#'>
              About us
            </a>
            <a className='FooterLink' href='#'>
              Term of Use
            </a>
            <a className='FooterLink' href='#'>
              Privacy Policy
            </a>
            <a className='FooterLink' href='#'>
              Press & Media
            </a>
          </div>
          <div className='Column'>
            <p className='Heading'>Products</p>
            <a className='FooterLink' href='#'>
              Marketplace
            </a>
            <a className='FooterLink' href='#'>
              Magazine
            </a>
            <a className='FooterLink' href='#'>
              Seller
            </a>
            <a className='FooterLink' href='#'>
              Wholesale
            </a>
            <a className='FooterLink' href='#'>
              Services
            </a>
          </div>
          <div className='Column'>
            <p className='Heading'>Careers</p>
            <a className='FooterLink' href='#'>
              Become a Campus Rep
            </a>
            <a className='FooterLink' href='#'>
              Become a Vasiti Influencer
            </a>
            <a className='FooterLink' href='#'>
              Become a Campus writer
            </a>
            <a className='FooterLink' href='#'>
              Become an Affiliate
            </a>
          </div>
          <div className='Column'>
            <p className='Heading'>Get in touch</p>
            <a className='FooterLink' href='#'>
              Contact us
            </a>
            <a className='FooterLink' href='#'>
              Partner with us
            </a>
            <a className='FooterLink' href='#'>
              Advertise with us
            </a>
            <a className='FooterLink' href='#'>
              Help/FAQs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
