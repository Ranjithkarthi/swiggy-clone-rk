import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import './index.css'

const ImgUrls = [
    {id:1, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png"},
    {id:2, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png"},
    {id:3, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"},
    {id:4, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png"},
    {id:5, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"},
    {id:6, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029846/PC_Creative%20refresh/3D_bau/banners_new/Idli.png"},
    {id:7, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/North_Indian_4.png"},
    {id:8, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png"},
    {id:9, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png"},
    {id:10, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png"},
]

const restaurants = [{
    id: 1,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457713/e0839ff574213e6f35b3899ebf1fc597_lze2wr.jpg",
    offer: "ITEMS AT ₹179",
    name: "Chinese Wok",
    rating: "4.3",
    time: "35-40 mins",
    cuisines: "Chinese, Asian, Tibetan, Desserts",
    location: "Santacruz East"
},
{
    id: 2,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457685/e2ej0ob56z47oylq9mkb_i7ayl9.jpg",
    offer: "50% OFF UPTO ₹100",
    name: "UBQ by Barbeque Nation",
    rating: "4",
    time: "55-60 mins",
    cuisines: "North Indian, Barbecue, Biryani, Kebabs, Mughlai, Desserts",
    location: "Kurla"
},
{
    id: 3,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457654/2b4f62d606d1b2bfba9ba9e5386fabb7_ugd4za.jpg",
    offer: "50% OFF UPTO ₹100",
    name: "Pizza Hut",
    rating: "4",
    time: "35-40 mins",
    cuisines: "Pizzas",
    location: "Bandra Kurla Complex"
},
{
    id: 4,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457597/hyzmji0gto0g7hag9y3z_unyryl.jpg",
    offer: "",
    name: "Monginis",
    rating: "4.3",
    time: "30-35 mins",
    cuisines: "Bakery, Desserts, Snacks",
    location: "Kurla West"
},
{
    id: 5,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457932/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399_g4cs6y.jpg",
    offer: "40% OFF UPTO ₹80",
    name: "McDonald's",
    rating: "4.4",
    time: "25-30 mins",
    cuisines: "Burgers, Beverages, Cafe, Desserts",
    location: "Santacruz East"
},
{
    id: 6,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457941/63178e3e64d503a479f2a2048a474552_wuo4kp.jpg",
    offer: "",
    name: "Subway",
    rating: "4.4",
    time: "30-35 mins",
    cuisines: "Salads, Snacks, Desserts, Beverages",
    location: "Santacruz East"
},
{
    id: 7,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457751/14f0382c-d0ee-42f5-b6fb-4c8b18bb6219_681413_xmwb9w.jpg",
    offer: "50% OFF UPTO ₹100",
    name: "GLOBO Ice Creams Of The World",
    rating: "4.4",
    time: "30-40 mins",
    cuisines: "Ice Cream, Desserts, Bakery",
    location: "Kurla West"
},
{
    id: 8,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457775/c99751d54e4e1847186c62b3309c1327_t1vfpw.jpg",
    offer: "ITEMS AT ₹149",
    name: "Big Bowl",
    rating: "4.4",
    time: "45-50 mins",
    cuisines: "North Indian, Chinese, Tibetan, Desserts",
    location: "Santacruz East"
},
{
    id: 9,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457793/94654fdf308764cd0faf83dba35bcdc3_yyi7tj.jpg",
    offer: "50% OFF UPTO ₹100",
    name: "NH1 Bowls - Highway To North",
    rating: "4.6",
    time: "34-44 mins",
    cuisines: "North Indian, Punjabi, Home Food",
    location: "Kurla West"
},
{
    id: 10,
    imgUrl: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713457803/9c18db360f5bee01412a495b1a67372d_hhfvff.jpg",
    offer: "ITEMS AT ₹159",
    name: "Charcoal Eats - Biryani & Beyond",
    rating: "4.3",
    time: "40-45 mins",
    cuisines: "Biryani, Kebabs, North Indian, Mughlai",
    location: "SANTACRUZ EAST, Kalina"
}
]
const RestaurantPage = () => {

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
        <div>
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
            <h3>Top Restaurant Chains in Bengaluru</h3>
            <div>
                <ul className="food-category-container">
                    {ImgUrls.map((each)=> (
                        <li key={each.id} className="each-li-img">
                            <img src={each.imageUrl} alt = {`image${each.id}`} className="each-img"/>
                        </li>)
                    )}
                </ul>
            </div>
            <div>
                <h3>Restaurants with Online Food Delivey in Bengaluru</h3>
                <ul className="restaurant-container">
                    {restaurants.map((each)=>(
                        <li className="top-restaurant-card-container" key={each.id}>
                            <Link to="/food-list" className="lunki">
                            <figure className="restaurant-image">
                                <img src={each.imgUrl} alt={each.name}/>
                                <h3 className="header">{each.offer}</h3>
                                <div className="shadow"></div>
                            </figure>
                            </Link>
                            <Link to="/food-list" className="lunki">
                                <div className="text-container">
                                    <h2 className="restaurant-name">{each.name}</h2>
                                    <div className="rating-container">
                                        <figure className="rating-icon">
                                            <img src="https://swiggy-clone-23.web.app/rating.7f988f24.png?1713451128365" alt="Rating"/>
                                        </figure>
                                        {each.rating}
                                        <span className="splitter">⬤</span>
                                        <div className="time">{each.time}</div>
                                    </div>
                                    <div className="cuisines">{each.cuisines}</div>
                                    <div className="location">{each.location}</div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantPage