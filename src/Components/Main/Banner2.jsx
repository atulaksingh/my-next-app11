import React from "react";
import ButtonCard from "../Cards/ButtonCard";
import { IoIosArrowRoundForward } from "react-icons/io";

function Banner2() {
  return (
    <>
      <div className="bg-[#C2EAF8] w-full mx-auto my-20 p-5  shadow-lg rounded-md">
        <div className="flex justify-between align-middle items-center w-full">
          <div>Book Your Dream Home with Just ₹1</div>
          <div className="w-fit  ">
        <div className="flex px-5 py-2 rounded-md  align-middle items-center  bg-[#FF6400] text-white text-center">
          <div>Book a Call</div>
          <div>
            <IoIosArrowRoundForward size={25} />
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}

export default Banner2;
