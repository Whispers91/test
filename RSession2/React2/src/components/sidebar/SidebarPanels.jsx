import React from "react";


export default function SidebarPanels() {
    const sidebar_Data = [
        {
            id: 1,
            logo: "/public/assets/Left_sidebar/app-window-mac.png",
            name: "Dashboard"
        },
        {
            id: 2,
            logo: "/public/assets/Left_sidebar/store.png",
            name: "Food Order",
        },
        {
            id: 3,
            logo: "/public/assets/Left_sidebar/store.png",
            name: "Feedback",
        },
        {
            id: 4,
            logo: "/public/assets/Left_sidebar/store.png",
            name: "Message",
        },
        {
            id: 5,
            logo: "/public/assets/Left_sidebar/store.png",
            name: "Order History",
        },
        {
            id: 6,
            logo: "/public/assets/Left_sidebar/store.png",
            name: "Payment details",
        },
        {
            id: 7,
            logo: "/public/assets/Left_sidebar/store.png",
            name: "Customizations",
        },
    ]
  return (
    <div>
      <div className="sidebar-panels w-full sm:w-64 md:w-72 lg:w-80 flex flex-col gap-3 p-4 bg-white rounded h-full">
            {sidebar_Data.map((item) => (
                <div key={item.id} className="sidebar-content hover:bg-[#EE57331A] hover:text-[#EE5733] cursor-pointer text-[#2A2A2A] px-4 py-3 rounded-[1em] border-2 border-gray-300 transition flex items-center gap-1.5">
                    <img src={item.logo} alt="" />
                    {item.name}
                </div>
            ))}
      </div>
    </div>
  );
}
