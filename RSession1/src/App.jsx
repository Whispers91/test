import React from "react";
import "./index.css";
import NormalCards from "./normalCards";
import SpecialCard from "./SpecialCard";


export default function App() {
  return (
    <div>
      <div className="container">
        <div className="top-text">
          <h1>Position and Transform</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            rem ullam laboriosam placeat possimus. Ipsum, illum.
          </p>
        </div>
        <div className="cards-container">
          <NormalCards/>
          <SpecialCard/>
        </div>
      </div>
    </div>
  );
}
