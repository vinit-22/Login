import React from "react";
import { FaUser, FaLock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./registration.css";
import { useNavigate } from "react-router-dom";

const Registration = () => {

const navigate = useNavigate();
  function handleClick2() {
    navigate("/ ");
  }

  return (
    <div className="yt">
      <div className="wrapper">
        <form action="">
          <p className="h1"><b>Registration</b></p>
          <div className="input-box">
            <input type="text" placeholder="FullName" required></input>
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" required></input>
            <FaEnvelope className="icon" />
          </div>
          <div className="input-box">
            <input type="phone" placeholder="Contact" required></input>
            <FaPhoneAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Create-Password"
              required
            ></input>
            <FaLock className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Confirm-Password"
              required
            ></input>
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />I agree terms & conditions
            </label>
          </div>

          <button type="submit"  onClick={handleClick2}>Register</button>
          <div className="register-link">
            <p>
              Already have an account? <a herf="#" onClick={handleClick2}>Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
