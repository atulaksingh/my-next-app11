import React from "react";
import ButtonCard from "../Cards/ButtonCard";
import { IoIosArrowRoundForward } from "react-icons/io";

function Footer() {
  return (
    <>
      <div className="flex justify-between align-middle items-center bg-[#F5F5F5] py-5 px-10 text-[#FF6400]">
        <div className="flex justify-between align-middle items-center gap-20">
          <div>Privacy Policy</div>
          <div>Terms and Services</div>
          <div>Feedback</div>
        </div>
        <div> © Copyright 2024 Dreamhausi</div>
      </div>
    </>
  );
}

export default Footer;
