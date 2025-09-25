import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CertificationSection = () => {
  const certificates = [
    "/certificate-1.png",
    "/certificate-1.png",
    "/certificate-1.png",
    "/certificate-1.png",
    "/certificate-1.png",
  ];
const handleSwiper = (swiper) => {
  swiper.on("slideChangeTransitionEnd", () => {
    ScrollTrigger.refresh(); // ✅ refresh after swiper moves
  });
};

useEffect(() => {
  // ✅ refresh once images are loaded
  const imgs = document.querySelectorAll(".certificate-slider img");
  let loaded = 0;
  imgs.forEach((img) => {
    if (img.complete) {
      loaded++;
    } else {
      img.onload = () => {
        loaded++;
        if (loaded === imgs.length) ScrollTrigger.refresh();
      };
    }
  });

  ScrollTrigger.refresh();
  window.addEventListener("resize", ScrollTrigger.refresh);

  return () => {
    window.removeEventListener("resize", ScrollTrigger.refresh);
  };
}, []);


  return (
    <div className="certifactionSec relative py-20 max-w-7xl mx-auto">
      <div className="secTitles text-center mb-20">
        <h2 className="section-title text-7xl">Certification</h2>
        <p className="text-4xl font-bold leading-0">Certification</p>
      </div>
      <div className="fourline max-w-7xl mx-auto -z-1">
          <div className="fline"></div>
          <div className="fline"></div>
          <div className="fline"></div>
          <div className="fline"></div>
        </div>

      <div className="certificate-slider overflow-hidden py-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={140}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="!overflow-visible"
          onSwiper={handleSwiper}
           breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1024: {
                      // desktops
                      slidesPerView: 3,
                      spaceBetween: 80,
                    },
                    1440: {
                      // large screens
                      slidesPerView: 3,
                      spaceBetween: 100,
                    },
                  }}
        >
          {certificates.map((src, idx) => (
            <SwiperSlide key={idx}>
              {({ isActive }) => (
                <div
                  className={`transition-all duration-500 p-6 ${
                    isActive
                      ? "bg-gradient-to-b from-[#066BCA] to-transparent border border-[#FFFFFF1A] border-b border-b-gray-800 z-10"
                      : "!bg-[#1a1a1a] border border-transparent blur-sm opacity-60 grayscale"
                  }`}
                >
                  <img
                    src={src}
                    alt={`Certificate ${idx + 1}`}
                    className="w-full h-auto"
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CertificationSection;
