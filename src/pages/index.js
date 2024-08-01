import Image from "next/image";
import { Inter } from "next/font/google";
import OurServices from "@/Components/Main/OurServices";
import Banner from "@/Components/Main/Banner";
import SmartHome from "@/Components/Main/SmartHome";
import Banner2 from "@/Components/Main/Banner2";
import HighDemand from "@/Components/Main/HighDemand";
import PopularBuilders from "@/Components/Main/PopularBuilders";
import NewLounched from "@/Components/Main/NewLounched";
import Footer from "@/Components/Shared/Footer";
import Deal from "@/Components/Main/Deal";
import HomeBanner from "@/Components/Main/HomeBanner";
import Header from "@/Components/Shared/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <HomeBanner />
        <div className="container mx-auto">
          <OurServices />
          <Banner />
          <SmartHome />
          <Banner2 />
          <HighDemand />
          <NewLounched />
          <PopularBuilders />
        </div>
        <Deal />
        <Footer />
      </div>
    </>
  );
}
