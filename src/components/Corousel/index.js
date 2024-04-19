import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './index.css'


// const corouselItems = [
//     {id: 1, imageUrl:"https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713376381/corouselImg1_imorji.jpg"},
//     {id: 2, imageUrl: "https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713376391/corouselImg2_wbp655.jpg"},
//     {id: 3, imageUrl: "https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713376381/corouselImg3_i7g4o0.jpg"},
// ]

const Corousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="slider-container corousel-container">
            <Slider {...settings}>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/686d86288557d0a78fbea2212f2195e0" alt="corouselImg1" className="eachCorouselItem"/>
                </div>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/34dae89ad01e2fa8c73063b1ca449173" alt="corouselImg2" className="eachCorouselItem"/>
                </div>
                <div>
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/686d86288557d0a78fbea2212f2195e0" alt="corouselImg3" className="eachCorouselItem"/>
                </div>
            </Slider>
        </div>
    );
}

export default Corousel