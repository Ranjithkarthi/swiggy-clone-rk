import { MdBrunchDining } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";
import './index.css'

const NearByRestaurants = () => {

    return(
        <div className="container">
            <div className="nearby-container">
                <span className="top-picks"><i><MdBrunchDining className="thumbsup-icon" /></i> Nearby Restaurants</span>
                <p className="nearby-container-para">Discover unique tastes near your</p>
            </div>
       
            <div className="restaurant-container">
                <div className="restaurant-image">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/cd832b6167eb9f88aeb1ccdebf38d942" />
                    {/* <div className="deal">
                        <div className="orange-deal">Flat Deal</div>
                        <div className="amount-deal">
                            <div className="font-big"><FaIndianRupeeSign className="indian-rupee-sign"/>125 OFF</div>
                            <div><span className="splitter">⬤</span>
                                ABOVE
                                <i className="fa-solid fa-indian-rupee-sign"></i>
                                249 <span className="splitter">⬤</span>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="restaurant-text">
                    <p className="restaurtant-name">Olio - The Wood Fired Pizzeria</p>
                    <p className="rating-amount">

                        <img className="rating" src="https://swiggy-clone-23.web.app/rating.7f988f24.png?1713407823225" />
                        4.3

                        <span className="splitter">⬤</span>
                        2 mins
                        <span className="splitter">⬤</span>

                        <FaIndianRupeeSign className="indian-rupee-sign"/>
                        300 for two

                    </p>
                    <p className="type">Pizzas, Italian</p>
                    <div className="offer">
                        <p>Free Delivery</p>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default NearByRestaurants