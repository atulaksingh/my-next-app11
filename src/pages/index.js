import Image from "next/image";
import { Inter } from "next/font/google";
import OurServices from "@/Components/Main/OurServices";
import Banner from "@/Components/Main/Banner";
import SmartHome from "@/Components/Main/SmartHome";
import Banner2 from "@/Components/Main/Banner2";
import HighDemand from "@/Components/Main/HighDemand";
import PopularBuilders from "@/Components/Main/PopularBuilders";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <OurServices />
        <Banner />
        <SmartHome />
        <Banner2 />
        <HighDemand />
        <PopularBuilders />
      </div>
    </>
  );
}
