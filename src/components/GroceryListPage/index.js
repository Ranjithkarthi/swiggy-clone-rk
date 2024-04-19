import { FaIndianRupeeSign } from "react-icons/fa6";
import './index.css'


const grocessyList = [
    {id:1 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/fea0f495679abbe56d043c1c9767b9a0", title:"Broccoli", condition:"Fresh to Eat", price:"53"},
    {id:2 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2024/3/1/fa16dca8-f70b-4493-ac2a-931396988aae_freshvegetables_ZYKI0TY2A9_MN.jpg", title:"Lettuce Mix", condition:"Hydroponics", price:"57"},
    {id:3 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/f958eafb4f0408125816ef94400f7aa7", title:"Cherry Tomato", condition:"Sweet & Juicy", price:"37"},
    {id:4 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/ec91a73e61d37cfb8256eaf079e4bc0f", title:"Iceberg Lettuce", condition:"Make Your Salad", price:"62"},
    {id:5 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/1e33bcda197ac3fa049b55edd21feec3", title:"Onion", condition:"Fresh to Eat", price:"30"},
    {id:6 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/e7e8024fcf502df6a3cf87ae3f681e51", title:"Coconut", condition:"Fresh to Eat", price:"43"},
    {id:7 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/962791dcb4483f4aad3ace68ca592217", title:"Carrot", condition:"For Salad", price:"34"},
    {id:8 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/b817b4278093e6a7ca0b95496806d6bd", title:"Green Capsicum", condition:"Adds Crunch", price:"55"},
    {id:9 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/f0a4e560bf3c5530723a99cfc25622fc", title:"Drumstick Leaves", condition:"Seasonal", price:"24"},
    {id:10 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/9adda32380e1a216862d0eda5d5f63f3", title:"Ginger", condition:"Not acid washed", price:"47"},
    {id:12 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/bd6d72b02afa5b58e46519420b0a4fbf", title:"Thirty3", condition:"Cold pressed", price:"72"},
    {id:13 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/c1964a337a735aef888b890ddf75125e", title:"Brown Channa", condition:"Healthy", price:"31"},
    {id:14 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/81c84f0bd616bdf338d67a8ffeac9ba7", title:"Tender Coconut", condition:"Hydration", price:"65"},
    {id:15 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/d1a7d5b234df7aa557db2125f5010a70", title:"Ice Apple", condition:"Jelly", price:"99"},
    {id:16 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/NI_CATALOG/IMAGES/CIW/2024/3/27/41b859d1-bc80-46b4-a0b9-0496642ff614_freshfruits_D8M8HGJ5WJ_MN", title:"Mango", condition:"Sweet & Juicy", price:"99"},
    {id:17 , imageUrl3:"https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_272,w_252/b18f21a82a3fea0279c1b7f2692c9b32", title:"Red Globe Grapes", condition:"Fresh & Sweet", price:"74"},
]


const GroceryListPage = () => (
        <>
            <h2 className="grocery-heading">Grocery Items</h2>
            <ul className="item-display-container">
                {grocessyList.map(each =>(
                    <li className="instamart-each-item" key={each.id}>
                        <img src={each.imageUrl3} className="each-img2"/>
                        <p>{each.title}</p>
                        <div className="instamart-item-text">
                            <div>
                                <p className="freshandready">{each.condition}</p>
                                <p><FaIndianRupeeSign className="indian-rupee-sign1"/> {each.price}</p>
                            </div>
                            <button className="add-btn">Add</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
)

export default GroceryListPage