import React from "react";
import part1 from '../asset/img/part1.png';
import part2 from '../asset/img/part2.png';
import part3 from '../asset/img/part3.png';
import part4 from '../asset/img/part4.png';
import part5 from '../asset/img/part5.png';
import part6 from '../asset/img/part6.png';
import part7 from '../asset/img/part7.png';
import part8 from '../asset/img/part8.png';
import part9 from '../asset/img/part9.png';
import part10 from '../asset/img/part10.png';
import part11 from '../asset/img/part11.png';
import part12 from '../asset/img/part12.png';


// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
SwiperCore.use([Autoplay]);

const transbox = {
    // width: '100%',
    // height: '50px',
    // // backgroundColor: 'red',
    // border: '1px solid black',
    // backgroundColor: '#0E5F71',

    // opacity: 0.6
}

class CarouselHeader extends React.Component {

    render() {
        return (
            <div className="container-carousel" >
                <div className="carousel-image">
                    <Swiper
                        spaceBetween={50}
                        loop={true}
                        autoplay={true}
                        slidesPerView={2}
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
                        <SwiperSlide> <img src={part10} /></SwiperSlide>
                        <SwiperSlide> <img src={part11} /></SwiperSlide>
                        <SwiperSlide> <img src={part12} /></SwiperSlide>

                    </Swiper>
                </div>
            </div>
        );
    }
}


export default CarouselHeader;
