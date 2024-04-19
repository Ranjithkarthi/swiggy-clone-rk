import {Route, Routes, useLocation} from 'react-router-dom';
import Home from './components/Home'
import FooterNav from './components/FooterNav';
import Header from './components/Header';
import RestaurantPage from './components/RestaurantPage';
import './App.css';
import FoodListingPage from './components/FoodListingPage';
import InstamartMainPage from './components/InstamartMainPage';
import GroceryListPage from './components/GroceryListPage';
import LoginPage from './components/LoginPage';

const App = () => {

  const location = useLocation();
  const hideHeaderFooterPaths = ['/'];
  const hideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);
  return(
  <>
    {!hideHeaderFooter && <Header />}
      <Routes>
        <Route exact path="/" element={<LoginPage/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/restaurants" element={<RestaurantPage/>}/>
        <Route exact path="/food-list" element={<FoodListingPage/>}/>
        <Route exact path="/instamart" element={<InstamartMainPage/>}/>
        <Route exact path="/grocery-list" element={<GroceryListPage/>}/>
      </Routes>
      {!hideHeaderFooter && <FooterNav />}
  </>
  )
}


export default App;
