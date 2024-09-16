import React from "react";
import food1 from "../images/food1.avif";
import { useNavigate } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <section>
        <div className="content">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <button
            className="reserve"
            aria-label="On Click"
            onClick={() => navigate("/Booking")}
          >
            Reserve Table
          </button>
        </div>
        <img src={food1} alt="Food" />
      </section>
    </header>
  );
};

export default Header;
