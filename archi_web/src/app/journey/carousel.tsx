"use client";

import React from "react";
import Slide from "./slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideDetail } from "./page";

export default function Carousel({
  slides,
  onSlideClick,
}: {
  slides: SlideDetail[];
  onSlideClick: (slide: SlideDetail) => void;
}) {
  return (
    <div className="w-full px-8">
      <Swiper
        cssMode={true}
        modules={[Navigation, Pagination]}
        slidesPerView={4}
        spaceBetween={10}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          640: { slidesPerView: 2, spaceBetween: 8 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
        }}
      >
        {slides.map((slide: any, index: number) => (
          <SwiperSlide key={index}>
            <Slide slide={slide} onClick={() => onSlideClick(slide)} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
