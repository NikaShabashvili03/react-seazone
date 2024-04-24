
    // <div className="self-center mt-[10px] h-[273px] md:w-[90%] lg:h-[60vh] xl:h-[85vh] relative  ">
    //     <img src="/womanyacht.png" className=" w-[348px] w-full md:w-full h-full object-cover "/>
    //     <p className="text-xl sm:text-2xl md:text-4xl xl:text-6xl absolute top-[50%] md:top-[40%] right-[100px] md:right-[60px] -translate-y-[50%] text-white font-bold">საუკეთესო ადგილი <br/> დაუვიწყარი <br/> გამოცდილებისკენ</p>
    //     <div className="hidden lg:flex gap-1 absolute bg-[#F8FEFF] absolute left-[30px] bottom-[30px] rounded-full p-2">
    //         <button className="bg-[#E0FDFF] rounded-full h-[60px] w-[60px] xl:h-[90px] xl:w-[90px]"></button>
    //         <button className="bg-[#E0FDFF] rounded-full h-[60px] w-[60px] xl:h-[90px] xl:w-[90px]"></button>
    //     </div>
    // </div>
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                speed={1000}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={'auto'}
                spaceBetween={60}
                loop={true}
                coverflowEffect={{
                    rotate: 0.5,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                initialSlide={1}
                modules={[EffectCoverflow, Autoplay]}
                className="mySwiper !h-[400px] lg:!h-[650px] !flex !justify-center !items-center"
            >
                <SwiperSlide className='!w-[80%] lg:!w-[60%] !h-[350px] lg:!h-[600px] !flex justify-center items-center xl:!block'>
                    <img className='w-full h-full object-cover' alt='test' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!w-[80%] lg:!w-[60%] !h-[350px] lg:!h-[600px] !flex justify-center items-center xl:!block'>
                    <img className='w-full h-full object-cover' alt='test' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!w-[80%] lg:!w-[60%] !h-[350px] lg:!h-[600px] !flex justify-center items-center xl:!block'>
                    <img className='w-full h-full object-cover' alt='test' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!w-[80%] lg:!w-[60%] !h-[350px] lg:!h-[600px] !flex justify-center items-center xl:!block'>
                    <img className='w-full h-full object-cover' alt='test' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!w-[80%] lg:!w-[60%] !h-[350px] lg:!h-[600px] !flex justify-center items-center xl:!block'>
                    <img className='w-full h-full object-cover' alt='test' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!w-[80%] lg:!w-[60%] !h-[350px] lg:!h-[600px] !flex justify-center items-center xl:!block'>
                    <img className='w-full h-full object-cover' alt='test' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!w-[80%] lg:!w-[60%] !h-[350px] lg:!h-[600px] !flex justify-center items-center xl:!block'>
                    <img className='w-full h-full object-cover' alt='test' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
  }
  