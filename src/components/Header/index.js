import { IoLocation } from "react-icons/io5";
import { SiSwiggy } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import './index.css'

const Header = () => {
    return( 
        <div className="header-container">
            <p className="location-content"><IoLocation className="location-icon"/>Sarjapur, Bengaluru<IoIosArrowDown /></p>
            <SiSwiggy className="swiggy-header-icon"/>
        </div>
    )
}

export default Header