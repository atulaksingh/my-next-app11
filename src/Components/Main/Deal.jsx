import React from "react";
import ButtonCard from "../Cards/ButtonCard";
import { IoIosArrowRoundForward } from "react-icons/io";

function Deal() {
  return (
    <>
      <div className="bg-[#F5F5F5] py-6">
        <div className="text-xl font-semibold text-center">
          Your ideal home is just a click away—start your search now!
        </div>
        <div className="w-fit text-center mx-auto mt-7 cursor-pointer">
          <div className="flex px-5 py-2 rounded-md  align-middle items-center  bg-[#FF6400] text-white text-center">
            <div>Book a Call</div>
            <div>
              <IoIosArrowRoundForward size={25} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deal;
