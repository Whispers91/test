import React from "react";


export default function Section1() {
  const foodData = [
    {
      id: 1,
      logo: "./assets/french fries.png",
      name: "Potato",
    },
    {
      id: 2,
      logo: "./assets/burger straight.png",
      name: "Burger",
    },
    {
      id: 3,
      logo: "./assets/chickens leg.png",
      name: "Chicken",
    },
    {
      id: 4,
      logo: "./assets/pizza slice.png",
      name: "Pizza",
    },
    {
      id: 5,
      logo: "./assets/french fries.png",
      name: "Potato",
    },
    {
      id: 6,
      logo: "./assets/burger straight.png",
      name: "Burger",
    },
    {
      id: 7,
      logo: "./assets/chickens leg.png",
      name: "Chicken",
    },
    {
      id: 8,
      logo: "./assets/pizza slice.png",
      name: "Pizza",
    },
  ];
  return (
    <div>
      <div className="Section1">
        <div className="section1-text font-[600] text-[1.2em]">
          <h1>Explore Products</h1>
        </div>
        <div className="foodContainer grid xl:grid-cols-4 lg:grid-cols-3 gap-4 mt-6 w-full">
          {foodData.map((item, index) => (
            <div
              key={item.id}
              className="foodContent bg-white rounded-[.5em] p-4"
            >
              <div className="items flex gap-2 justify-center">
              <div className="items-img w-10">
              <img src={item.logo} alt="" className="object-contain"/>
              </div>
              {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
