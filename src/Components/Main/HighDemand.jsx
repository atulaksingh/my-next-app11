import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import ButtonCard from "../Cards/ButtonCard";
const data = [
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722423170/Rectangle_81_cciqex.png",
    imgt: "Possession from Jan 2026",
    t1: "Bay View Hall",
    p1: " Bay View, Sector 10 Vashi, Navi Mumbai",
    p2: "  2 BHK Apartment, 2 Baths",
    p3: " Price: ₹1.6-2.2 Cr.i",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722424645/Rectangle_82_pojsaj.png",
    imgt: "Possession from Jan 2026",
    t1: "Bay View Hall",
    p1: " Bay View, Sector 10 Vashi, Navi Mumbai",
    p2: "  2 BHK Apartment, 2 Baths",
    p3: " Price: ₹1.6-2.2 Cr.i",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722424645/Rectangle_83_jc8d3l.png",
    imgt: "Possession from Jan 2026",
    t1: "Bay View Hall",
    p1: " Bay View, Sector 10 Vashi, Navi Mumbai",
    p2: "  2 BHK Apartment, 2 Baths",
    p3: " Price: ₹1.6-2.2 Cr.i",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722424644/Rectangle_84_eygwpm.png",
    imgt: "Possession from Jan 2026",
    t1: "Bay View Hall",
    p1: " Bay View, Sector 10 Vashi, Navi Mumbai",
    p2: "  2 BHK Apartment, 2 Baths",
    p3: " Price: ₹1.6-2.2 Cr.i",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722423170/Rectangle_81_cciqex.png",
    imgt: "Possession from Jan 2026",
    t1: "Bay View Hall",
    p1: " Bay View, Sector 10 Vashi, Navi Mumbai",
    p2: "  2 BHK Apartment, 2 Baths",
    p3: " Price: ₹1.6-2.2 Cr.i",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722424645/Rectangle_82_pojsaj.png",
    imgt: "Possession from Jan 2026",
    t1: "Bay View Hall",
    p1: " Bay View, Sector 10 Vashi, Navi Mumbai",
    p2: "  2 BHK Apartment, 2 Baths",
    p3: " Price: ₹1.6-2.2 Cr.i",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722424645/Rectangle_83_jc8d3l.png",
    imgt: "Possession from Jan 2026",
    t1: "Bay View Hall",
    p1: " Bay View, Sector 10 Vashi, Navi Mumbai",
    p2: "  2 BHK Apartment, 2 Baths",
    p3: " Price: ₹1.6-2.2 Cr.i",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722424644/Rectangle_84_eygwpm.png",
    imgt: "Possession from Jan 2026",
    t1: "Bay View Hall",
    p1: " Bay View, Sector 10 Vashi, Navi Mumbai",
    p2: "  2 BHK Apartment, 2 Baths",
    p3: " Price: ₹1.6-2.2 Cr.i",
  },
];

function HighDemand() {
  return (
    <>
      <div className="my-10">
        <div className="text-xl font-medium py-4">Projects in High Demand</div>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          navigation={true}
        
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <div className="relative">
                  <img
                    alt="Project Image"
                    className="w-full h-full"
                    src={item.image}
                  />
                  <div className="text-white absolute bottom-4 left-2 py-0.5 px-2 w-fit ">
                    {item.imgt}
                  </div>
                </div>
                <div className="mx-2">
                  <div className="text-[20px] font-semibold leading-[28px] mb-1 hover:text-[#cf2e2e] transition-all delay-75 cursor-pointer">
                    {item.t1}
                  </div>
                  <div className="text-sm leading-[25px] my-0">{item.p1}</div>
                  <div className="text-sm leading-[25px] my-0">{item.p2}</div>
                  <div className="text-sm leading-[25px] my-0">{item.p3}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
   
        </Swiper>

        <ButtonCard />
      </div>
    </>
  );
}

export default HighDemand;
