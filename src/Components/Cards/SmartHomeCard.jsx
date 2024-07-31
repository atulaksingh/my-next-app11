import Image from "next/image";
import React from "react";

function SmartHomeCard({data}) {
  return (
    <>
      <div>
        <div className="p-5 bg-[#C2EAF8] rounded-lg shadow-lg h-40">
          <div>
            <Image
              src={data.img}
              alt="Description of the image"
              width={25}
              height={10}
            />
          </div>
          <div className="font-bold py-2">{data.title}</div>
          <div className="text-sm">
           {data.disp}
          </div>
        </div>
      </div>
    </>
  );
}

export default SmartHomeCard;
