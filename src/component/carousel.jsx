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


class Carousel extends React.Component {

    render() {
        return (
            <div className="container-carousel">
                <img src={part1} />
                <img src={part2} />
                <img src={part3} />
                <img src={part4} />
                <img src={part5} />
                <img src={part6} />
                <img src={part7} />
                <img src={part8} />
            </div>
        );
    }
}


export default Carousel;
