import React from 'react'
import {Link} from "react-router-dom";
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Get to Know Us</h4>
              <ul>
                <li><Link to ="/">About us</Link></li>
                <li><Link to ="/">Careers</Link></li>
                <li><Link to ="/">Press Releases</Link></li>
                <li><Link to ="/">Cisco Cares</Link></li>
                <li><Link to ="/">Gift a Smile</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Make Money with Us</h4>
              <ul>
                <li><Link to ='/'>Sell on webex</Link></li>
                <li><Link to ='/'>Cisco Global Selling</Link></li>
                <li><Link to ='/'>Become an affiliate</Link></li>
                <li><Link to ='/'>Fullfilment by Cisco</Link></li>
                <li><Link to ='/'>Advertise Your Products</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Let Us Help You</h4>
              <ul>
                <li><Link to ='/'>COVID-19 and Cisco</Link></li>
                <li><Link to ='/'>Your Account</Link></li>
                <li><Link to ='/'>Return Center</Link></li>
                <li><Link to ='/'>100% Purchase Protection</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <Link to ='/'><i className="fab fa-facebook"></i></Link>
                <Link to ='/'><i className="fab fa-twitter"></i></Link>
                <Link to ='/'><i className="fab fa-instagram"></i></Link>
                <Link to ='/'><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
