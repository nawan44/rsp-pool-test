import React from "react";
import part1 from '../../asset/blog/become.jpg';
import part2 from '../../asset/blog/esport.png';
import part3 from '../../asset/blog/gaji-programmer.jpg';
import part4 from '../../asset/blog/laravel.png';
import part5 from '../../asset/blog/online-bootcamp.png';


// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);


class SideSwiperBlog extends React.Component {

    render() {
        return (
            <div className="blog-main-swiper" >
                <div className="blog-main-swiper-image">
                    <Swiper
                        spaceBetween={50}
                        loop={true}
                        pagination={{ clickable: true }}


                        autoplay={true}
                        slidesPerView={1}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}

                    >
                        <SwiperSlide>
                            <div className="side-swiper">
                                <img src={part1} style={{ width: '200px' }} />
                                <h5>PROJECT PT Pindad</h5>
                                <p>Pindad mempunyai concern untuk membuat aplikasi KPI dengan timeline pengerjaan yang sangat ketat. Ada dua service yang Pindad inginkan dari Refactory, yaitu Join Development dan DevOps service</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>  <div className="side-swiper">
                            <img src={part2} style={{ width: '200px' }} />
                            <h5>TRAINING QASIR</h5>
                            <p>Pindad mempunyai concern untuk membuat aplikasi KPI dengan timeline pengerjaan yang sangat ketat. Ada dua service yang Pindad inginkan dari Refactory, yaitu Join Development dan DevOps service</p>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="side-swiper">
                                <img src={part3} style={{ width: '200px' }} />
                                <h5>TRAINING MODANA .ID</h5>
                                <p>Pindad mempunyai concern untuk membuat aplikasi KPI dengan timeline pengerjaan yang sangat ketat. Ada dua service yang Pindad inginkan dari Refactory, yaitu Join Development dan DevOps service</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="side-swiper">
                                <img src={part4} style={{ width: '200px' }} />
                                <h5>TRAINING CARMUDI</h5>
                                <p>Pindad mempunyai concern untuk membuat aplikasi KPI dengan timeline pengerjaan yang sangat ketat. Ada dua service yang Pindad inginkan dari Refactory, yaitu Join Development dan DevOps service</p>
                            </div>
                        </SwiperSlide>


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


export default SideSwiperBlog;
