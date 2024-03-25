import React from "react";
import "./Navbar.css";
// import Toggle from "../Toggle/Toggle.jsx";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Vishal S Naik</div>
        {/* <Toggle /> */}
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyle: "none" }}>
            <li>Home</li>
            <li>Service</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
