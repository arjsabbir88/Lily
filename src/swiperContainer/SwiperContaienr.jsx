import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SwiperContainer() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper px-10"
      >
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/v6FSCy9z/Gemini-Generated-Image-gqo66ugqo66ugqo6.png"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/nNTrbDVm/pexels-tima-miroshnichenko-5951063.jpg"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/pBByF7Ht/pexels-dario-fernandez-ruz-7809929.jpg"
            alt=""
          />{" "}
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/nNTrbDVm/pexels-tima-miroshnichenko-5951063.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/HTdfYxBt/pexels-leah-newhouse-50725-8050564.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/pBByF7Ht/pexels-dario-fernandez-ruz-7809929.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/CsQLZHp9/pexels-cottonbro-2925306.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/CsQLZHp9/pexels-cottonbro-2925306.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/Mx2V7wc5/pexels-cottonbro-4861347.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="text-black">
          <img
            src="https://i.ibb.co.com/CswKpk0b/pexels-rdne-8499633.jpg"
            alt=""
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
