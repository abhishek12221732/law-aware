import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const FactsSlider = ({ facts }) => {
  return (
    <div style={{ 
      width: 'calc(100% - 20px)', // Full width with margin
      margin: '10px', // Margin
      height: '25vh', // 25% of the viewport height
      boxSizing: 'border-box' 
    }}>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{
          height: '100%',
        }}
      >
        {facts.map((fact, index) => (
          <SwiperSlide key={index} style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%', 
            textAlign: 'center',
            fontSize: '1.2em' 
          }}>
            {fact}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FactsSlider;
