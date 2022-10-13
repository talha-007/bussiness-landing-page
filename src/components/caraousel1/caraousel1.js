import React from 'react'
import '../caraousel1/caraousel1.css'
import namesilo from '../images/namesilo.png'
// import { Swiper, SwiperSlide } from 'swiper/react';

function caraousel1() {


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
      
  return (
    <>
    <div class="swiper swiper_">
    {/* <!-- Additional required wrapper --> */}
    <div class="swiper-wrapper">
      {/* <!-- Slides --> */}
      <div class="swiper-slide">
        <img src={namesilo} alt="" />
      </div>
      <div class="swiper-slide">Slide 2</div>
      <div class="swiper-slide">Slide 3</div>
      ...
    </div>
    {/* <!-- If we need pagination --> */}
    <div class="swiper-pagination"></div>
  
    {/* <!-- If we need navigation buttons --> */}
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  
    {/* <!-- If we need scrollbar --> */}
    <div class="swiper-scrollbar"></div>
  </div>
  </>
  )
}

export default caraousel1