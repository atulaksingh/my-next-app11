import Image from "next/image";
import React from "react";

function ServicesCard() {
  return (
    <>
      <div>
        <Image
          src={
            "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722409049/closeup-shot-person-thinking-buying-selling-house_1_xg3hbt.png"
          }
          alt={"services"}
          height={400}
          width={400}
          className=" "
        />
        <h2 className="text-base font-semibold  mt-1">Buy a House</h2>
      </div>
    </>
  );
}

export default ServicesCard;
