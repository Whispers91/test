import React from "react";
import { FaStar } from "react-icons/fa";
export default function Section2() {
  const burgerData = [
    {
      id: 1,
      img: "/public/assets/burger straight.png",
      name: "Vegetable Burger",
      price: "32$",
      prevPrice: "40$",
      review: "2.5k",
    },
    {
      id: 2,
      img: "/public/assets/burger straight.png",
      name: "Vegetable Burger",
      price: "32$",
      prevPrice: "40$",
      review: "2.5k",
    },
    {
      id: 3,
      img: "/public/assets/burger straight.png",
      name: "Vegetable Burger",
      price: "32$",
      prevPrice: "40$",
      review: "2.5k",
    },
    {
      id: 4,
      img: "/public/assets/burger straight.png",
      name: "Vegetable Burger",
      price: "32$",
      prevPrice: "40$",
      review: "2.5k",
    },
    {
      id: 5,
      img: "/public/assets/burger straight.png",
      name: "Vegetable Burger",
      price: "32$",
      prevPrice: "40$",
      review: "2.5k",
    },
    {
      id: 6,
      img: "/public/assets/burger straight.png",
      name: "Vegetable Burger",
      price: "32$",
      prevPrice: "40$",
      review: "2.5k",
    },
  ];
  return (
    <div className="Section2 mt-5 w-[60vw]">
      <div className="section2-text flex gap-4 text-2xl font-semibold">
        <h2 className="hover:border-b-2 border-b-[#EE5733] transition">
          Popular
        </h2>
        <h2 className="hover:border-b-2 border-b-[#EE5733] transition">
          Recent
        </h2>
      </div>
      <div className="section2-container mt-8 ">
        <div className="cards-container grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-4 mt-6">
          {burgerData.map((item, index) => (
              <div className="card w-70 bg-white p-8 rounded-[.6em]" key={item.id}>
                <div className="card-img bg-[#F0F1F5] rounded-2xl p-6 mb-1.5">
                  <img src={item.img} alt="" className="w-full object-contain" />
                </div>
                <div className="card-content mt-4">
                  <div className="burger-type font-semibold ">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="burger-price-review flex justify-between items-center mt-2">
                    <div className="burger-price flex gap-2">
                      <h2 className="text-font font-bold text-[#EE5733]">
                        {item.price}
                      </h2>
                      <del className="text-del font-light text-[#2A2A2A66]">
                        {item.prevPrice}
                      </del>
                    </div>
                    <div className="burger-review flex gap-1 items-center">
                      <div className="star text-yellow-400">
                        <FaStar />
                      </div>
                      <div className="item-review text-[#00000066]">
                      {item.review}
                      </div>
                    </div>
                  </div>
                  <div className="card-btns mt-2 flex justify-between">
                    <a href="#" className="bg-[#F0F1F5] text-black rounded px-4 py-2">
                      Wishlist
                    </a>
                    <a href="#" className="bg-[#EE5733] text-white rounded px-3 py-2 mr-1">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
