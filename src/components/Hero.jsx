import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/Hero.css';

export default function Hero() {
  return (
    <section id="hero">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mainBanner"
      >
        <SwiperSlide className="slide1">
          <div className="hero-text">
            <h2>Stay Light, Travel Free</h2>
            <h4>감성 여행의 시작</h4>
            <p>
              도심 속 감성 한옥부터 숲속 힐링 스테이까지
              당신만의 특별한 공간을 발견하세요.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2">
          <div className="hero-text">
            <h2>Find Your Perfect Stay</h2>
            <h4>테마로 찾는 숙소</h4>
            <p>
              한옥 · 바다 · 숲 · 도심
              다양한 테마 속에서 나에게 맞는 숙소를 만나보세요.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide3">
          <div className="hero-text">
            <h2>Experience Unique Stays</h2>
            <h4>특별한 숙소 경험</h4>
            <p>
              오션뷰 빌라, 전통 한옥, 숲속 통나무집
              일상에서 벗어난 새로운 공간을 경험해보세요.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
