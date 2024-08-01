import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function ButtonCard() {
  return (
    <>
      <div className="w-fit text-center mx-auto my-10 cursor-pointer">
        <div className="flex px-5 py-2 rounded-md  align-middle items-center  bg-[#FF6400] text-white text-center">
          <div>Book a Call</div>
          <div>
            <IoIosArrowRoundForward size={25} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonCard;
