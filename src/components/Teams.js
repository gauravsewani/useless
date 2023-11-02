import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import Card from "./Card";

SwiperCore.use([Navigation]);

const Teams = () => {
  return (
    <div className="mx-auto bg-transparent select-none w-full overflow-x-hidden">
      <h1 className="mt-8 text-center text-4xl font-bold">Core Teams</h1>

      <Swiper
        navigation
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
        }}
        spaceBetween={0}
        className="mx-auto lg:max-w-[70vw]"
      >
        <SwiperSlide>
          <Card
            imageSrc="img/bear/dean.jpeg"
            altText="Dean Cheng"
            name="DEAN CHENG"
            title="CO-FOUNDER"
            description="TRADER, CO-FOUNDER OF FLYMEDIA"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            imageSrc="img/bear/sam.jpeg"
            altText="Samuel Foo"
            name="SAMUEL FOO"
            title="CO-FOUNDER"
            description="TRADER, NFT GROUP HARBRINGER AND METALANDERS MANAGER"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            imageSrc="img/bear/naqib.jpeg"
            altText="Naqib"
            name="NAQIB"
            title="CTO"
            description="DEVELOPER AT STOIC CAPITAL TRADER"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            imageSrc="img/bear/dinh.jpeg"
            altText="Dinh Ho"
            name="DINH HO"
            title="TOKEN ECONOMIST"
            description="CO-FOUNDER OF AIZA WORLD, SEA TOKEN ENGINEERING ACADEMY"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            imageSrc="img/bear/desmond.jpeg"
            altText="Desmond"
            name="DSNMDH"
            title="USER EXPERIENCE"
            description="Formerly Creative Director for NIKE"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            imageSrc="img/bear/joshua.jpeg"
            altText="Joshua"
            name="JOSHUA"
            title="BUSINESS HEAD"
            description="ICO AND PARTNERSHIP EXPERT"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Teams;
