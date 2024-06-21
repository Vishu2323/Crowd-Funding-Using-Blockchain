import React from 'react'

const Landing = () => {
    return (
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="font-epilogue font-semibold text-[18px] text-white uppercase">Welcome to Our Website</h1>
          <div className="button-container">
            <button className="login-button">Login</button>
            <button className="signup-button">Signup</button>
          </div>
        </div>
      </div>
    );
  };

export default Landing
