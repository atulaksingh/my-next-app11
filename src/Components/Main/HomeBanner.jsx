import Image from "next/image";
import React from "react";

function HomeBanner() {
  return (
    <>
      <div>
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dt0j68vdr/image/upload/v1722488854/image_2_xynn2e.png)",
          }}
        >
          <div class="grid grid-cols-2 gap-4">
            <div>
              <div className=" ">
                <div className=" w-full h-screen">
                  <Image
                    src="https://res.cloudinary.com/dt0j68vdr/image/upload/v1722488855/file_9_2_olxnmv.png"
                    alt="Left Column Image"
                    width={1300}
                    height={1000}
                    layout="contain"
                    className="h-screen w-full "
                  />
                </div>
              </div>
            </div>
            <div className="mx-20 my-auto">
              <div className="font-bold text-7xl text-black">
                Find Your Perfect Home with Dreamhausi
              </div>
              <div className="text-lg mt-10">
                Search through our handpicked selection of homes and apartments
                to find the one that fits your lifestyle perfectly.
              </div>
              <div className="text-lg">
                Whether you're looking for a cozy apartment in the city or a
                spacious family home in the suburbs, our listings are designed
                to help you find the perfect place to call home.
              </div>
              <div className="text-lg">
                Search through our handpicked selection of homes and apartments
                to find the one that fits your lifestyle perfectly.
              </div>
              <div className="text-lg">
                Whether you're looking for a cozy apartment in the city or a
                spacious family home in the suburbs, our listings are designed
                to help you find the perfect place to call home.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
