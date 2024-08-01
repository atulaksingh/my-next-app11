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
const data = [
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722486399/Frame_22_lqp0we.png",
  },
];
const data1 = [
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },
  {
    image:
      "https://res.cloudinary.com/dt0j68vdr/image/upload/v1722492573/Frame_25_zdlyj1.png",
  },
];
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
          <NewLounched  data={data1} title={"Offers for You"}/>
          <HighDemand />
          <NewLounched  data={data} title={"Smart Home Buying"}/>
          <PopularBuilders />
        </div>
        <Deal />
        <Footer />
      </div>
    </>
  );
}
