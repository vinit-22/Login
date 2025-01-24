import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  function handleClick() {
    navigate("/Registration");
  }
  function handleClick1() {
    navigate("/nav2");
  }
  
  return (
    <div className="rr">
      <div className="wrapper">
        <form action="">
          <p className="h1"><b>Login</b></p>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#"> Forget password?</a>
          </div>

          <button type="submit" onClick={handleClick1}>Login</button>
          <div className="register-link">
            <p>
              Don't have an account? <a href="#"  onClick={handleClick}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
