import Slider from "react-slick";
import { Link } from "react-router-dom";
import './index.css';

const imageUrlList = [
    {id:1 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/ef6d7392cc14c4e55fd32508a8b8b80b", text2:"Fresh Vegetables"},
    {id:2 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/NI_CATALOG/IMAGES/CIW/2024/3/8/44ee874e-181c-4c2e-93b0-6a94db3259d8_e2a24168-319e-4ace-9a8e-595d5c3f8e96", text2:"Fresh Fruits"},
    {id:3 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/19731db0464639f447a3e7eaed9b66ee", text2:"Dairy Breads"},
    {id:4 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/78bbb3999c09c6c1b523feb46a1d050e", text2: "Cold Drinkd"},
    {id:5 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/42698dd87251bcdd6f76bd9b33c9b2b3", text2: "Munchies"},
    {id:6 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/a4616dbff53cb6cf0414af884d6fee2e", text2:"Bicuits"},
    {id:7 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/9ae9c5aeb3dc1cc7c5a4b2822281fe58", text2:"Cereals"},
    {id:8 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/0e827ce57ff4894be87d45e1aecf2aba", text2:"Tea, Coffee"},
    {id:9 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/b4e6a49e226f0d9684dffbbf8a1ff8ff", text2:"Pet Supplies"},
    {id:10 , imageUrl2: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/1df44623437590df051ca7a256f985ba", text2:"BAth, Body.."},
]




const InstamartMainPage = () => {

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
        <>
            <div className="slider-container corousel-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_330,w_580/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/3/17/7587790c-8f6f-40a4-9a7c-420c74e02928_803.png" alt="corouselImg1" className="eachCorouselItem1"/>
                    </div>
                    <div>
                        <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_330,w_580/rng/md/carousel/production/3e082b31021d22386ae6513906e12010" alt="corouselImg2" className="eachCorouselItem1"/>
                    </div>
                    <div>
                        <img src="https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_330,w_580/rng/md/carousel/production/4a699f7417cd2332a7d9c30ff31bab3b" alt="corouselImg3" className="eachCorouselItem1"/>
                    </div>
                </Slider>
            </div>
            <div>
                <h3>Select by Category</h3>
                <ul className="food-category-container1">
                    {imageUrlList.map((each)=> (
                        <Link to="/grocery-list" className="link2"><li key={each.id} className="each-li-img1">
                            <img src={each.imageUrl2} alt = {`image${each.id}`} className="each-img1"/>
                            <p>{each.text2}</p>
                        </li></Link>)
                    )}
                </ul>
            </div>
        </>
    );
}

export default InstamartMainPage
