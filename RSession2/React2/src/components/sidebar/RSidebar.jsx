import React from "react";

export default function RSidebar() {
  const sandwichData = [
    {
      id: 1,
      name: "Vegetable Burger",
      logo: "/assets/burger straight.png",
      price: "$25",
      quantity: "x3",
    },
    {
      id: 2,
      name: "Vegetable Burger",
      logo: "/assets/burger straight.png",
      price: "$25",
      quantity: "x3",
    },
    {
      id: 3,
      name: "Vegetable Burger",
      logo: "/assets/burger straight.png",
      price: "$25",
      quantity: "x3",
    },
  ];
  return (
    <div>
      <div className="sidebar-container bg-white p-6 rounded shadow h-full mt-6 lg:mt-0">
        <div className="sidebar-text p-3 font-[500]">
          <h1>Cart Items</h1>
        </div>
        <div className="sandwich-container">
          {sandwichData.map((item, index) => (
            <div
              key={item.id}
              className="sidebar-food bg-white p-4 rounded border-b-1 border-b-[#0000001A] flex gap-3 mb-1"
            >
              <div className="sandwich-img w-30 bg-[#F0F1F5] p-3 rounded-xl">
                <img src={item.logo} alt="" />
              </div>
              <div className="item-desc w-full">
              {item.name}
              <div className="quantity-price flex items-center justify-between">
                <div className="price text-[#EE5733] font-[500]">{item.price}</div>
                <div className="quantity text-[#2A2A2A66] font-[500] mt-5">{item.quantity}</div>
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className="payment-container bg-gray-100 p-8 mt-4 rounded xl:h-[70vh] lg:h-[70vh]">
          <div className="payment-text border-b-1 border-b-[#0000001A]">
            <h3>Payment Summary</h3>
            <div className="subtotal flex justify-between items-center mt-4">
              <p className="text-[#00000099] font-[400]">Subtotal</p>
              <p className="text-[#00000099] font-[400]">$100</p>
            </div>
            <div className="tax flex justify-between items-center mt-2">
              <p className="text-[#00000099] font-[400]">Tax</p>
              <p className="text-[#00000099] font-[400]">-$6</p>
            </div>
          </div>
          <div className="total-payment mt-8">
            <div className="total flex justify-between items-center mb-3">
              <h3>Total Payment</h3>
              <h3>$94</h3>
            </div>
            <div className="payment-methods w-full">
              <h3>Payment Method</h3>
              <div className="payments flex flex-wrap justify-center gap-4 mt-6">
                <div className="credit w-20 object-contain">
                  <img
                    src="/public\assets\Right_sidebar\credit.png"
                    alt=""
                    className="bg-white rounded hover:bg-orange-600 w-full"
                  />
                </div>
                <div className="cash bg-white rounded hover:bg-orange-600  w-20 h-20 flex items-center justify-center">
                  <img
                    src="/public\assets\Right_sidebar\cash.png"
                    alt=""
                    className="object-contain w-[85%] h-[90%] m-auto"
                  />
                </div>
                <div className="visa w-20 object-contain">
                  <img
                    src="/public\assets\Right_sidebar\visa.png"
                    alt=""
                    className="bg-white rounded hover:bg-orange-600 w-full"
                  />
                </div>
                <div className="paypal w-20 object-contain">
                  <img
                    src="/public\assets\Right_sidebar\paypal.png"
                    alt=""
                    className="bg-white rounded hover:bg-orange-600 w-full"
                  />
                </div>
              </div>
              <div className="payment-btn mt-6 flex justify-center">
                <a href="#" className="bg-orange-500 p-3 rounded w-full sm:w-auto text-center">
                  <p className="hover:text-white">Place An Order Now</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
