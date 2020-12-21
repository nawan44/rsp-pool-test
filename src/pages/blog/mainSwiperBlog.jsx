import React from "react";
import part1 from '../../asset/blog/become.jpg';
import part2 from '../../asset/blog/esport.png';
import part3 from '../../asset/blog/gaji-programmer.jpg';
import part4 from '../../asset/blog/laravel.png';
import part5 from '../../asset/blog/online-bootcamp.png';
import part6 from '../../asset/blog/wanita.jpg';
import part7 from '../../asset/blog/redux.jpg';
import part8 from '../../asset/blog/solusi.png';
import part9 from '../../asset/blog/tiket.jpg';

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);


class MainSwiperBlog extends React.Component {

    render() {
        return (
            <div className="blog-main-swiper" >
                <div className="blog-main-swiper-image">
                    <Swiper
                        spaceBetween={50}
                        loop={true}
                        navigation

                        autoplay={true}
                        slidesPerView={3}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}

                    >
                        <SwiperSlide> <img src={part1} /></SwiperSlide>
                        <SwiperSlide> <img src={part2} /></SwiperSlide>
                        <SwiperSlide> <img src={part3} /></SwiperSlide>
                        <SwiperSlide> <img src={part4} /></SwiperSlide>
                        <SwiperSlide> <img src={part5} /></SwiperSlide>
                        <SwiperSlide> <img src={part6} /></SwiperSlide>
                        <SwiperSlide> <img src={part7} /></SwiperSlide>
                        <SwiperSlide> <img src={part8} /></SwiperSlide>
                        <SwiperSlide> <img src={part9} /></SwiperSlide>



                        {/* 
                        <SwiperSlide> <img /></SwiperSlide>
                        <SwiperSlide> <img /></SwiperSlide>
                        <SwiperSlide> <img /></SwiperSlide>
                        <SwiperSlide> <img /></SwiperSlide>
                        <SwiperSlide> <img /></SwiperSlide>
                        <SwiperSlide> <img /></SwiperSlide>
                        <SwiperSlide> <img /></SwiperSlide>
                        <SwiperSlide> <img /></SwiperSlide>
                        <SwiperSlide> <img /></SwiperSlide> */}


                    </Swiper>
                </div>
            </div>
        );
    }
}


export default MainSwiperBlog;
