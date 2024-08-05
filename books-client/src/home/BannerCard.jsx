import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import './BannerCard.css';
import { EffectCards } from 'swiper/modules';

// Import images directly
import book1 from '../assets/banner-books/book1.png';
import book2 from '../assets/banner-books/book2.png';
import book3 from '../assets/banner-books/book3.png';
import book4 from '../assets/banner-books/book4.png';
import book5 from '../assets/banner-books/book5.png';

const images = [book1, book2, book3, book4, book5];

function BannerCard() {
  return (
    <div className='banner'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Book ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerCard;
