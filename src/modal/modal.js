import React, { useState } from "react";
import "./modal.style.scss";
import { useForm } from "react-hook-form";
import { Modal } from "react-bootstrap";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function ThreadModal({ show, handleClose }) {
  const [success, setSuccess] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const collectionRef = collection(db, "messages");

  const { register, handleSubmit, reset } = useForm();

  const handleChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };

  const onSubmit = async (data) => {
    console.log(data, "data");
    await addDoc(collectionRef, {
      firstName: data.firstName,
      lastName: data.lastName,
      location: data.location,
      message: data.message,
      pic: imgUrl,
      role: data.role,
    });
    reset();
    setSuccess(true);
  };

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
          <Modal.Header
            // onClick={() => setSuccess(false)}
            closeButton
          ></Modal.Header>

          <div className='content'>
            <Modal.Body className=''>
              {!success && (
                <>
                  <div className='title d-flex  flex-column justify-content-center align-items-center'>
                    <h4 className='pb-5'>Share your amazing story!</h4>
                  </div>
                  <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='pic' className='upload'>
                      Upload your Picture <br />
                      <div className='upload'>
                        <input
                          type='file'
                          id='pic'
                          name='pic'
                          onChange={handleChange}
                          accept='image/*'
                          required
                        />
                        <img
                          src={imgUrl ? "/assets/x.svg" : "/assets/upload.svg"}
                          alt=''
                        />
                      </div>
                    </label>

                    <div className='fullname d-flex'>
                      <label htmlFor='fname' className='me-2'>
                        First Name
                        <input
                          type='text'
                          id='fname'
                          {...register("firstName")}
                          required
                        />
                      </label>
                      <label htmlFor='lname' className='mx-4'>
                        Last Name
                        <input
                          type='text'
                          id='lname'
                          name='lastName'
                          className=''
                          {...register("lastName")}
                          required
                        />
                      </label>
                    </div>
                    <label htmlFor='message'>
                      Share your story
                      <textarea
                        id='message'
                        name='message'
                        {...register("message")}
                        required
                      />
                    </label>
                    <label htmlFor='' className='dual-role pb-3'>
                      What did you interact with Vasiti as?
                      <div className='role d-flex align-items-center'>
                        <input
                          type='radio'
                          id='customer'
                          value='customer'
                          {...register("role")}
                          required
                        />
                        <label htmlFor='customer' className='mx-2'>
                          Customer
                        </label>
                        <input
                          type='radio'
                          value='vendor'
                          {...register("role")}
                          id='vendor'
                          required
                        />
                        <label htmlFor='vendor' className='mx-2'>
                          {" "}
                          Vendor
                        </label>
                      </div>
                    </label>
                    <label htmlFor='location'>
                      City or Higher Institution (for Students)
                      <input type='text' {...register("location")} required />
                    </label>
                    <div className='d-flex justify-content-end align-items-end mt-3'>
                      <button disabled={handleSubmit}>Share Your Story!</button>
                    </div>
                  </form>
                  <div />
                </>
              )}
              {success && (
                <>
                  <div className='success d-flex flex-column py-5 my-3 px-5 justify-content-center align-items-center'>
                    <img src='/assets/success.svg' alt='' />
                    <h1 className='mt-3'>Thank you for sharing your story!</h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button
                      className='py-2 px-5 mt-2'
                      onClick={() => {
                        handleClose();
                        setSuccess(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </Modal.Body>
          </div>
        </div>
      </Modal>
    </div>
  );
}
