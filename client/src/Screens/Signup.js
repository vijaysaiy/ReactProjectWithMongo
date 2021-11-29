import React from "react";
import "./Signin.css";
function Signup() {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Create account</h1>
        <form action="userLogin" method="post" className="form-container">
          <div className="txt_field">
            <input type="text" name="name" required />
            <label for="name">Your name</label>
          </div>
          <div className="txt_field">
            <input type="text" name="uname" required />
            <label for="username">Mobile Number or email</label>
          </div>
          <div className="txt_field">
            <input type="password" name="pass" required />
            <label for="password">Password</label>
          </div>
          <div className="txt_field">
            <input type="password" name="pass" required />
            <label for="password">Password again</label>
          </div>
          <button type="submit" value="userlogin">
            Continue
          </button>
          <div className="signup_link"></div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
