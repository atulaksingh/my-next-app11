import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";

function NewLounched({data,title}) {
  return (
    <>
      <div className="my-10">
        <div className="text-xl font-medium py-4">{title}</div>
        <div className="mx-10">
          <Swiper
            slidesPerView={6}
            spaceBetween={0}
            navigation={false}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide>
                <div className="">
                  <Image
                    src={item.image}
                    alt={"services"}
                    objectFit="contain"
                    height={250}
                    width={250}
                    className=" "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default NewLounched;
