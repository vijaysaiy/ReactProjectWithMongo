import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./Signin.css";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const handleClick = (event) => {
    event.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form className="form-container">
          <div className="txt_field">
            <input
              type="text"
              name="uname"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="username">Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="pass"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password">Password</label>
          </div>
          <button type="submit" onClick={handleClick} disabled={isFetching}>
            Login
          </button>
          {error && <p>Something went wrong</p>}
          <div className="signup_link">
            Not a member? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
