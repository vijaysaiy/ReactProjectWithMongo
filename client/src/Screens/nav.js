import React from "react";
import { Link } from "react-router-dom";
function nav() {
  return (
    <header className="md-top-bar md-top-bar--dark" role="navigation">
      <div className="md-top-bar__container">
        <div className="md-top-bar__brand">
          <Link className="md-brand" href="/">
            <div className="md-brand__logo md-brand__logo--pad">
              <i className="icon icon-cisco-logo"></i>
            </div>
            <div className="md-brand__title">Momentum UI</div>
          </Link>
        </div>
        <nav className="md-top-bar__nav ">
          <div className="md-list md-list--horizontal" role="list">
            <Link className="md-list-item active" role="listItem">
              Develop
            </Link>
            <Link className="md-list-item" role="listItem">
              Styles
            </Link>
            <Link className="md-list-item" role="listItem">
              Layout
            </Link>
            <Link className="md-list-item" role="listItem">
              Navigation
            </Link>
          </div>
        </nav>
        <div className="md-top-bar__right ">
          <div className="md-top-bar__user"></div>
          <div className="md-top-bar__logged-out">
            <Link>Log In</Link>
            <button className="md-button md-button--blue">Button</button>
          </div>
        </div>      
       
      </div>
    </header>
  );
}

export default nav;
