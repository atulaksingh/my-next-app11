import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import Image from "next/image";
import ButtonCard from "../Cards/ButtonCard";
const data = [
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt: "  Builder Name",
    t: "00 Projects",
    image1:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722427330/Ellipse_31_ngiyrt.png",
    imgt1: "  Builder Name",
    t1: "00 Projects",
  },
];

function PopularBuilders() {
  return (
    <>
      <div className="my-10">
        <div className="text-xl font-medium py-4">Smart Home Buying</div>
        <div className="">
          <Swiper
            slidesPerView={4}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {data.map((item, index) => (
              <SwiperSlide>
                <div className="mx-5">
                  <div className="bg-white border shadow-lg p-4 rounded-sm mb-6">
                    <div className="flex gap-5 align-middle items-center">
                      <div>
                        <Image
                          src={item.image}
                          alt="Description of the image"
                          width={95}
                          height={95}
                        />
                      </div>
                      <div>
                        <div className="text-base font-semibold mb-1">
                          {item.imgt}
                        </div>
                        <div className="text-sm">{item.t}</div>
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
                  <div className="bg-white border shadow-lg p-4 rounded-sm ">
                    <div className="flex gap-5 align-middle items-center">
                      <div>
                        <Image
                          src={item.image1}
                          alt="Description of the image"
                          width={95}
                          height={95}
                        />
                      </div>
                      <div>
                        <div className="text-base font-semibold mb-1">
                          {item.imgt}
                        </div>
                        <div className="text-sm">{item.t1}</div>
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <ButtonCard />
      </div>
    </>
  );
}

export default PopularBuilders;
