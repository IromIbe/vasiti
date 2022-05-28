import React, { useState } from "react";
import Header from "./header/header";
import "./login.style.scss";

function Login() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };
  return (
    <div className='login-cont d-flex justify-content-center align-items-center flex-column'>
    <Header/>
    <div className="login-details">
    <h4 className='login'>Login</h4>
      <form>
        <label htmlFor='email' className='d-flex flex-column'>
          Email
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Enter Your Email Address '
            value={loginDetails.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor='password' className='d-flex flex-column'>
          Password
          <input
            type='password'
            name='password'
            id='password'
            placeholder='Enter Your Password'
            value={loginDetails.password}
            onChange={handleChange}
          />
        </label>
        <button>Sign In with Google</button>
      </form>
    </div>

    </div>
  );
}

export default Login;
