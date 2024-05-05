import Image from "next/image";
import { Banner } from "./components/Banner";
import { MainsCategories } from "./components/MainsCategories";
import { PrelimsCategories } from "./components/PrelimsCategories";

export default function Home() {
  return (
    <>
    <Banner />
    <MainsCategories />
    <PrelimsCategories />

    </>
  );
}
