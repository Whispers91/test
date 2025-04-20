import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function API() {
  const [products, setProducts] = useState([])
  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const result = data.products;
    setProducts(result);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="cards-container grid grid-cols-5 gap-4 mt-10">
      {products.map((item, index) => (
        <div key={item.id} className="card bg-white py-7 px-6 rounded-3xl w-fit h-140">
          <div className="card-img relative">
            <div className="card-btns absolute top-[15%] right-0 flex flex-col gap-2 mr-2">
            <img src={item.thumbnail} alt="" className="rounded-3xl" />
              <FaHeart className="heart w-15 h-15 bg-[#F1F1FF] p-4 rounded-xl hover:bg-[#DB4444] hover:text-white" />
              <FaEye className="eye w-15 h-15 bg-[#F1F1FF] p-4 rounded-xl hover:bg-[#DB4444] hover:text-white" />
            </div>
          </div>
          <div className="card-content flex flex-col gap-4 mt-5">
            <p className="text-[#DB4444] font-[600] text-[1.3rem]">
              {item.price}
            </p>
            <p className="text-2xl text-black font-[500] text-[1.3rem] w-65">
              {item.name}
            </p>
            <a href="#" className="group flex justify-center relative">
              <div
                className="absolute inset-0 bg-[#1D1D1D] w-full rounded-2xl text-white text-center py-5 flex items-center justify-center 
                          transition-opacity duration-300 opacity-100 group-hover:opacity-0 z-10"
              >
                Add To Cart
              </div>
              <div
                className="absolute inset-0 bg-[#1D1D1D] w-full rounded-2xl text-white py-5 px-5 flex items-center justify-between 
                          transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-20"
              >
                <FiMinus />
                1
                <FiPlus />
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
