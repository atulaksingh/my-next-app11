import Image from "next/image";
import React from "react";
import SmartHomeCard from "../Cards/SmartHomeCard";
import ButtonCard from "../Cards/ButtonCard";

const SmartData = [
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722416758/Group_8_yxrmlk.png",
    title: "Smart Home Buying",
    disp: "Get the latest property rates and trends at a glance.",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722417620/Vector_fvgy7u.png",
    title: "Pay in small EMI’s",
    disp: "Plan your mortgage payments in small, manageable EMIs.",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722417620/Vector_1_ugwrag.png",
    title: "Top Investment Spots",
    disp: "Find the best areas for real estate investment.",
  },
  {
    img: "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722417619/Vector_2_rf85bi.png",
    title: "Market Insights",
    disp: "Access key research findings for smarter decisions.",
  },
];

function SmartHome() {
  return (
    <>
      <div className="my-10">
        <div className="text-xl font-medium py-4">Smart Home Buying</div>
        <div className="grid grid-cols-4 gap-7 ">
          {SmartData.map((item, index) => (
            <SmartHomeCard data={item} />
          ))}
        </div>

        <ButtonCard />
      </div>
    </>
  );
}

export default SmartHome;
