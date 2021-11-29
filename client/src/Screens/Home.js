import React from 'react'
import Slider from '../Components/Slider'
import Cards from "./home.json";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
    <Slider />
      <div className="home-row">
        {Cards.map((data) => {
          return (
            <div className="cards" key={data.id}>
              <div className="card-info">
                <h4>{data.description}</h4>
              </div>
              <div className="img">
                <Link to="/products/all">
                  <img src={data.imgSrc} alt="ad-card" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
        </div>
    )
}

export default Home
