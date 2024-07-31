import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
const data = [
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:"https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t1: "00 Projects",
  },
];

function PopularBuilders() {
  return (
    <>
      <div className="my-10">
        <div className="text-xl font-medium py-4">Smart Home Buying</div>

        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
         
            <div className="bg-white border shadow-lg p-4 rounded-sm ">
              <div className="flex gap-5 align-middle items-center">
                <div>
                  <Image
                    src={
                      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png"
                    }
                    alt="Description of the image"
                    width={95}
                    height={95}
                  />
                </div>
                <div>
                  <div className="text-base font-semibold mb-1">
                    Builder Name
                  </div>
                  <div className="text-sm">00 Projects</div>
                  <div className="flex gap-5 mt-3">
                    <div className="bg-[#C2EAF8] text-[#FF6400] px-7 ">
                      Sale
                    </div>
                    <div className="bg-[#C2EAF8] text-[#FF6400] px-7 ">
                      ReSale
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default PopularBuilders;
