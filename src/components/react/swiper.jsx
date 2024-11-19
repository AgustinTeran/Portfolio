import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import React from 'react';


export default ({slideArray}) => {
  return (
    <Swiper
      slidesPerView={1.2}
      loop={true}
      spaceBetween={20}
      // centeredSlides={true}
      autoplay={{
        delay: 7000,
        // disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {
        slideArray.map((item,index) => (
          <SwiperSlide key={index} className='cursor-grab w-full open:cursor-grabbing'>
            <div className='flex py-4 justify-center items-center rounded-lg shadow-md'>
              <div className='relative'>
                <img src={item.img.src} alt={item.name} className='min-h-[400px] object-cover aspect-[1919/950]' />
                <div data-aos="fade-on" className='backdrop-blur-sm py-8 px-3 md:px-4 flex flex-col gap-4 absolute top-0 right-0 w-[60%] h-full bg-[#000000b8] text-white z-10'>
                  <h2 className='text-3xl'>{item.name}</h2>
                  <p>{item.description}</p>
                </div>  
              </div>
            </div>
            </SwiperSlide>
        ))
      }
    </Swiper>
  );
};