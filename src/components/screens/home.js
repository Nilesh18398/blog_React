import React from "react";
import Header from "../parts/header";
import Footer from "../parts/Footer";
import FreshStories from "../parts/FreshStories";
import Slider from "../parts/slider";
import TradingPost from "../parts/treading_post";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <TradingPost />
      <FreshStories />
      <Footer />
    </>
  );
}
