import Card from '../Card';
import { FaArrowRight } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import Corousel from '../Corousel'
import NearByRestaurants from '../NearByRestaurants';
import './index.css'


const topPicks = [
    {id: 1, imageUrl: "https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713448878/download_1_zdcyzo.jpg", title: "Baskin Robbins", text: "23 mins"},
    {id: 2, imageUrl: "https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713448878/download_jyd1cd.jpg", title: "KFC", text: "10 mins"},
    {id: 3, imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/d0450ce1a6ba19ea60cd724471ed54a8", title: "Dominos", text: "43 min"},
    {id: 4, imageUrl: "https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713449150/po2-1608800288_kutjjy.jpg", title: "polar Bear", text: "51 mins"},
]

const Home = () => {

    return(
        <div className="overall-container">
            <div className="resta-insta-container">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/ak4f9kufbxgb8fprancy" className="restaurant-img"/>            
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/iudaqlpxqyigjgrlmtho" className="restaurant-img"/>
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8aedd81fc69a9e57e7748ac2649618d7" className="restaurant-img" />
            </div>

            <div>
                <span className="top-picks"><i><FaRegThumbsUp className="thumbsup-icon" /></i> Top Picks for You</span>
                <ul className="top-picks-container">
                    {topPicks.map((each) => <Card each = {each} key = {each.id} />)}
                </ul>
            </div>
            <div>
                <p className="today-featured-heading">Today's Featured</p>
                <Corousel />
            </div>
            <div>
                <NearByRestaurants/>
            </div>
            
        </div>
    )
}

export default Home