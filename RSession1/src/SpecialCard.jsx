import React from 'react'

export default function SpecialCard() {
  return (
    <div className="card">
            <div className="card-img">
              <img src="../public/Assets/Frame 1.jpg" alt="" />
            </div>
            <div className="card-hover-text">
              <div className="card-text button">
                <a href="#">View Item</a>
              </div>
              <div className="card-text hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                sunt esse, enim incidunt nobis quae ex!
              </div>
            </div>
          </div>
  )
}
