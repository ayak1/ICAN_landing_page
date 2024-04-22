import { Swiper , SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow , Navigation , Pagination } from "swiper/modules";
import slide1 from "../assets/imgs/slide1.jpg"
import slide2 from "../assets/imgs/slide2.jpg"
import slide3 from "../assets/imgs/slide3.jpg"
import slide4 from "../assets/imgs/slide4.png";
import slide5 from "../assets/imgs/slide5.webp";
import arrow_prev from "../assets/imgs/arrow-left-wide-line.svg";
import arrow_next from "../assets/imgs/arrow-right-wide-fill.svg"

export default function SimpleSlider() {

    
    return (
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ 
        el: '.swiper-pagination', 
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation, Autoplay]} // Include Autoplay module
      autoplay={{ 
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      className="swiper_container"
    >
      <SwiperSlide>
        <img src={slide1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="slide_image" />
      </SwiperSlide>

      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow " >
        </div>
        <div className="swiper-button-next slider-arrow">
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
    );
  }