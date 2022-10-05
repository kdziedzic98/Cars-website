import React from "react";
import "../App.css";
import "./Cards.css";
import audi from "../images/img-2.jpg";
import bmwm8 from "../images/img-4.jpg";
import jaguar from "../images/img-5.jpg";
import ford from "../images/img-6.jpg";
import bmwx7 from "../images/img-7.jpg";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "./Button";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards--container">
        <h1 className="cards--headline">Most popular choices</h1>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          speed={800}
          className="myswiper"
          navigation
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="swiperslide">
            <img src={audi} alt="audi" />
            <h2 className="swiper-img-headline1">Audi RS3</h2>
            <p className="swiper-img-paragraph1">
              Model year: 2022 Engine: 2.5 TFSI 401HP
            </p>
            <Button buttonSize="btn--big" buttonStyle="btn--primary">
              Check offer
            </Button>
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={bmwm8} alt="bmwm8" />
            <h2 className="swiper-img-headline1">BMW M8</h2>
            <p className="swiper-img-paragraph1">
              Model year: 2021 Engine: 4.4 V8 591HP
            </p>
            <Button buttonSize="btn--big" buttonStyle="btn--primary">
              Check offer
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={jaguar} alt="jaguar" />
            <h2 className="swiper-img-headline">Jaguar XE P300</h2>
            <p className="swiper-img-paragraph">
              Model year: 2020 Engine: 2.0 Turbo 296HP
            </p>
            <Button buttonSize="btn--big" buttonStyle="btn--primary">
              Check offer
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={ford} alt="ford" />
            <h2 className="swiper-img-headline">Ford Mustang Mach 1</h2>
            <p className="swiper-img-paragraph">
              Model year: 2021 Engine: 5.0 TI-VCT 460HP
            </p>
            <Button buttonSize="btn--big" buttonStyle="btn--primary">
              Check offer
            </Button>
          </SwiperSlide>
          <SwiperSlide>
            <img src={bmwx7} alt="bmwx7" />
            <h2 className="swiper-img-headline">BMW 740d Xdrive</h2>
            <p className="swiper-img-paragraph">
              Model year: 2022 Engine: 3.0 Turbo 335HP
            </p>
            <Button buttonSize="btn--big" buttonStyle="btn--primary">
              Check offer
            </Button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
