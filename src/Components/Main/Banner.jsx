import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Banner() {
  return (
    <>
      <div className="grid grid-cols-2 border shadow-lg my-10">
        <div className="p-5">
          <div className="text-[#FF6400] text-lg font-bold">
            Sell or rent your property
          </div>
          <p>
            Looking to sell or rent your property? We’re here to make it easy!
            With our extensive network and expertise, we'll help you find the
            perfect buyers or tenants in no time. Get the best value and enjoy a
            hassle-free process with Dreamhausi. Let's get started!
          </p>
          <div className="w-fit text-center  my-5">
            <div className="flex px-5 py-2 rounded-md  align-middle items-center  bg-[#FF6400] text-white text-center">
              <div>Book a Call</div>
              <div>
                <IoIosArrowRoundForward size={25} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-full ">
            <Image
              src={
                "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722414678/set-designer-work-indoors_1_1_vnc8pk.png"
              }
              layout="fill"
              objectFit="contain"
              className="object-none object-right  rounded-none"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
