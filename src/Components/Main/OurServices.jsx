import React from "react";
import ServicesCard from "../Cards/ServicesCard";
import { IoIosArrowRoundForward } from "react-icons/io";
import ButtonCard from "../Cards/ButtonCard";
function OurServices() {
  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-5 gap-7 p-4">
          <div className="">
            <ServicesCard />
          </div>
          <div className="">
            <ServicesCard />
          </div>
          <div className="">
            <ServicesCard />
          </div>
          <div className="">
            <ServicesCard />
          </div>
          <div className="">
            <ServicesCard />
          </div>
        </div>
        <ButtonCard />
      </div>
    </>
  );
}

export default OurServices;
