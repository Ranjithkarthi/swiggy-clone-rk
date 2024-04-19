import { FaIndianRupeeSign } from "react-icons/fa6";
import './index.css'

const foodList = [{
    id: "1",
    imageURL: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713464923/3e4f7ca32bf517b390f1cb3205b892e4_hiynys.jpg",
    foodType: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713464733/e41ff3b10a26b097602560180fb91a62_rgubfs.png",
    foodName: "Combo for 1 Veg",
    amount: "359",
    rating: "4.3 (12)",
    description: "Serves 1 | Combo for one (Rice/Noodle Bowl with choice of Veg Gravy, Veg Momos & Drinks)"
},
{
    id: "2",
    imageURL: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713465170/440c06ace44b931b729d9b6a090aba07_t49fmo.jpg",
    foodType: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713464748/non-veg-illustration-vector-icon-260nw-1762664813_tvkzqq.jpg",
    foodName: "Combo for 1 Non-Veg",
    amount: "379",
    rating: "3.2 (4)",
    description: "Serves 1 | Combo for one (Rice/Noodle Bowl with choice of Non-Veg Gravy, Non- Veg Momos & Drinks)"

},
{
    id: "3",
    imageURL: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713465193/556889e9-b065-4137-b72c-461bac300d01_2c92ca9c-be45-4732-b598-7904032b7dbb_qczyxn.jpg",
    foodType: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713464733/e41ff3b10a26b097602560180fb91a62_rgubfs.png",
    foodName: "Hunan Paneer Dry",
    amount: "309",
    rating: "4.1 (13)",
    description: "Serves 1 | (Spicy) Cubes Of Paneer, Onion, Capsicum Tossed With Spicy & Savory flavors of Hunan Sauce."
},
{
    id: "4",
    imageURL: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713465213/6a0e0e38-2636-4eff-af1a-a27f23fb292c_879376f5-f5b5-400c-86aa-aec499341475_xfb6fj.jpg",
    foodType: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713464733/e41ff3b10a26b097602560180fb91a62_rgubfs.png",
    foodName: "Schezwan Paneer Dry",
    amount: "319",
    rating: "4.3 (12)",
    description: "Serves 1 | (Spicy) Cubes Of Paneer, Onion, Capsicum Tossed With Schezwan Sauce."
},
{
    id: "5",
    imageURL: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713465289/437b789a-adb8-4e75-8eff-e189113ffb30_6c98fe7d-1a74-4c71-8119-42b7993ab602_v2n2qo.jpg",
    foodType: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713464748/non-veg-illustration-vector-icon-260nw-1762664813_tvkzqq.jpg",
    foodName: "Hunan Chicken Dry",
    amount: "339",
    rating: "4.2 (23)",
    description: "Serves 1 | (Spicy) Diced chicken, Onion, Capsicum Tossed With Spicy & Savory flavors of Hunan Sauce."
},
{
    id: "6",
    imageURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/34c4e4459727b4429974700d487a9b48",
    foodType: "https://res.cloudinary.com/dhbxbl89a/image/upload/v1713464748/non-veg-illustration-vector-icon-260nw-1762664813_tvkzqq.jpg",
    foodName: "Steamed Chicken Wheat Momos With Momo Chutney",
    amount: "240",
    rating: "4.9 (30)",
    description: "Serves 1 | Aromatic chicken mince encased in wheat wrapper.Served with momo chutney"
}
]




const FoodListingPage = () => (
        <ul className="restaurant-container1">
            {foodList.map((each)=>(
                <li className="top-restaurant-card-container1" keay={each.id}>
                    <figure className="restaurant-image1">
                        <img src={each.imageURL} alt="Restaurant Image" />

                        <div className="location1" style={{ textAlign: 'center', position: 'relative', top: '-20px' }}>Customisable</div>
                        <div className="shadow1"></div>
                    </figure>
                    <div className="text-container1">
                        <img className="food-type1" src={each.foodType} />
                        <h2 className="restaurant-name1">{each.foodName}</h2>
                        <div className="rating-container1">
                            <div className="time1"><FaIndianRupeeSign className="indian-rupee-sign"/>{each.amount}</div>
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <figure className="rating-icon1">
                                    <img src="https://swiggy-clone-23.web.app/rating.7f988f24.png?1713451128365" alt="Rating" />
                                </figure>
                                {each.rating}
                            </div>

                        </div>
                        <div className="cuisines">{each.description}</div>
                    </div>
                </li>
            ))}
        </ul>
)


export default FoodListingPage