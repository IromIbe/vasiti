import React from "react";
import "./modal.style.scss";
import { Modal } from "react-bootstrap";

export default function ThreadModal({ show, handleClose }) {
  return (
    <div>
      <Modal
        className=''
        centered
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <div className='modal-main px-2'>
          <Modal.Header closeButton></Modal.Header>

          <div className='content'>
            <Modal.Body className=''>
              <div className='title d-flex  flex-column justify-content-center align-items-center'>
                <h4 className='pb-5'>Share your amazing story!</h4>
              </div>
              <form action=''>
                <label htmlFor='pic' className='upload'>
                  Upload your Picture <br />
                  <div className='upload'>
                    <input
                      type='file'
                      id='pic'
                      name='pic'
                      placeholder='Choose Image'
                    />
                    <img src='/assets/upload.svg' alt='' />
                  </div>
                </label>
                <div className='fullname d-flex'>
                  <label htmlFor='fname' className='me-2'>
                    First Name
                    <input
                      type='text'
                      id='fname'
                      name='firstName'
                      className=''
                    />
                  </label>
                  <label htmlFor='lname' className='mx-4'>
                    Last Name
                    <input
                      type='text'
                      id='lname'
                      name='lastName'
                      className=''
                    />
                  </label>
                </div>
                <label htmlFor='message'>
                  Share your story
                  <textarea id='message' name='message' />
                </label>
                <label htmlFor='' className="dual-role pb-3">
                  What did you interact with Vasiti as?
                  <div className="role d-flex align-items-center">
                  <input type='radio' id="customer" name='role'  value='Customer' />
                  <label htmlFor="customer" className="mx-2">Customer</label>
                  <input type='radio' name='role' id="vendor" value='Vendor' />
                  <label htmlFor="vendor"  className="mx-2"> Vendor</label>

                  </div>

                </label>
            <label htmlFor="college">
            City or Higher Institution (for Students)
            <input type="text" name="college" id="college"/>
            </label>
        <button>Share Your Story!</button>
              </form>
              <div />
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </div>
  );
}
