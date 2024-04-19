import { SiSwiggy } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import {Link} from 'react-router-dom';
import './index.css'

const FooterNav = () => {
    return(
        <nav className="nav-container">
            <ul className="ul-list">
                <li>
                    <Link to="/Home" className="nav-icon">
                        <SiSwiggy className="nav1"/>
                        {/* <img src="https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713441344/nav%20icon/swiggy_nav_icon_xzwkgc.png"/>*/}<br/> 
                        <span>Swiggy</span>
                    </Link>
                </li>

                <li>
                    <Link to="/restaurants" className="nav-icon">
                        <FaBowlFood />
                        {/* <img src="https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713441343/nav%20icon/food_nav_icon_nexoai.png"/> */}
                        <br/>
                        <span>Food</span>
                    </Link>
                </li>

                <li>
                    <Link to="/instamart" className="nav-icon">
                        <GiFruitBowl />
                        {/* <img src="https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713441343/nav%20icon/instamart_nav_icon_xqgfrv.png"/> */}
                        <br/>
                        <span>Instamart</span>
                    </Link>
                </li>

                <li>
                    <Link to="/search" className="nav-icon">
                        <IoSearch />
                        {/* <img src="https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713441343/nav%20icon/search_nav_icon_lqjig3.png"/> */}
                        <br/>
                        <span>Search</span>
                    </Link>
                </li>

                <li>
                    <Link to="/account" className="nav-icon"> 
                        <FaRegUser />
                        {/* <img src="https://res.cloudinary.com/dmgfxiqrc/image/upload/v1713441344/nav%20icon/account_nav_icon_rifa2a.png"/> */}
                        <br/>
                        <span>Account</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default FooterNav