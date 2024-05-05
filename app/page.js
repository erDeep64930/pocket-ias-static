import Image from "next/image";
import { Banner } from "./components/Banner";
import { MainsCategories } from "./components/MainsCategories";
import { PrelimsCategories } from "./components/PrelimsCategories";
// import SwiperBanner from "./components/SwiperBanner";

export default function Home() {
  return (
    <>
    <Banner />
    {/* <SwiperBanner /> */}
    <MainsCategories />
    <PrelimsCategories />

    </>
  );
}
