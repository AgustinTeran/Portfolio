import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Left from "../../assets/icons/Left";

// Import Swiper styles
import 'swiper/css';
// import React, { useEffect, useState } from 'react';


// export default ({slideArray}) => {
//   return (
//     <Swiper
//       slidesPerView={1.2}
//       loop={true}
//       spaceBetween={20}
//       // centeredSlides={true}
//       autoplay={{
//         delay: 7000,
//         // disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       className="mySwiper"
//     >
//       {
//         slideArray.map((item,index) => (
//           <SwiperSlide key={index} className='cursor-grab w-full open:cursor-grabbing'>
//             <div className='flex py-4 justify-center items-center rounded-lg shadow-md'>
//               <div className='relative'>
//                 <img src={item.img.src} alt={item.name} className='min-h-[400px] max-w-[1063.33px] w-full object-cover aspect-[1919/950]' />
//                 <div data-aos="fade-on" className='backdrop-blur-sm py-8 px-3 md:px-4 flex flex-col gap-4 absolute top-0 right-0 w-[60%] h-full bg-[#000000b8] text-white z-10'>
//                   <h2 className='text-3xl md:font-semibold'>{item.name}</h2>
//                   <p className='md:text-lg'>{item.description}</p>
//                 </div>  
//               </div>
//             </div>
//             </SwiperSlide>
//         ))
//       }
//     </Swiper>
//   );
// };

import { useEffect, useRef, useState } from "react";

export default ({ slideArray, children }) => {
  const [slideIndex, setSlideIndex] = useState(0); // Cambiado a 0-indexed
  const maxSlideIndex = slideArray.length - 1; // Máximo índice de slide

  const carouselRef = useRef(null);

  useEffect(() => {
    if(window){
      const params = new URLSearchParams(window.location.search);
      var searchParamsSlide = Number(params.get("slide"));
      if(searchParamsSlide){
        setSlideIndex(searchParamsSlide);
        scrollToSlide(searchParamsSlide);
      }
    }
  }, []);

  const setSearchParam = (key, value) => {
    const url = new URL(window.location);
    url.searchParams.set(key, value); // Modificar o agregar el parámetro
    window.history.pushState({}, '', url); // Actualizar la URL sin recargar la página
  };
  

  const getSlideWidth = () => {
    if (carouselRef.current) {
      // Calcula el 90% del ancho del contenedor del carrusel + 16px de gap
      return Math.min(carouselRef.current.offsetWidth * 0.9 + 16, 1220);
    }
    return 0;
  };

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const slideWidth = getSlideWidth();
      carouselRef.current.scrollLeft = slideWidth * index;
    }
  };

  const scrollLeft = () => {
    let newIndex = slideIndex - 1;
    if (newIndex < 0) {
      setSearchParam("slide", maxSlideIndex);
      newIndex = maxSlideIndex; // Vuelve al final
    }
    setSearchParam("slide", newIndex);
    setSlideIndex(newIndex);
    scrollToSlide(newIndex);
  };

  const scrollRight = () => {
    let newIndex = slideIndex + 1;
    if (newIndex > maxSlideIndex) {
      setSearchParam("slide", 0);
      newIndex = 0; // Vuelve al inicio
    }
    setSearchParam("slide", newIndex);
    setSlideIndex(newIndex);
    scrollToSlide(newIndex);
  };

  return (
    <div className="relative w-[100vw-12px] min-h-[400px] overflow-hidden">
      {/* Botón Izquierdo */}
      <button
        onClick={scrollLeft}
        className="z-30 absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white py-3 px-2 rounded-full hover:bg-gray-700"
      >
        <Left className="size-6"/>
      </button>

      {/* Carrusel */}
      {/* <div className='absolute top-0 left-0 w-full h-full z-20'>
        
      </div> */}
      <div
        ref={carouselRef}
        // onScrollCapture={}
        onMouseOut={() => {
          scrollToSlide(slideIndex);
        }}
        // onScroll={}
        className="flex w-full relative carrusel h-full min-h-[400px] overflow-x-scroll gap-4 scroll-smooth scrollbar-none"
      >
      <div className='size-full z-10 bg-red-400'></div>
        {children}
      </div>

      {/* Botón Derecho */}
      <button
        onClick={scrollRight}
        className="z-30 absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white py-3 px-2 rounded-full hover:bg-gray-700"
      >
        <Left className="size-6 rotate-180"/>
      </button>
    </div>
  );
};
