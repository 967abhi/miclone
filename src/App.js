import React from 'react';
import './App.css'
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from "./components/Slider";
import Offer from "./components/Offer.js"
import Heading from "./components/Heading.js"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import data from "./Data/data.json"
import StarProducts from './components/StarProducts.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReview from './components/ProductReview.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import EndFooter from './components/EndFooter.js';
import NavOptions from "./components/Navoptions.js"

function App() {
  return (
    <Router>
  

    <PreNavbar/>
    <Navbar/>

    <NavOptions   miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}  />





    <Slider start={data.banner.start}/>
    <Offer offers={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProducts StarProducts={data.starProduct}/>
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu/>
     <Routes>

     
     <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}>
       
     </Route>
     </Routes>
    <Routes>

     
     <Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}>
       
     </Route>
     </Routes>
     {/* ====Home=== */}
     <Routes>

     
     <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}>
       
     </Route>
     </Routes>
     {/* =-=======Lifestyles========= */}
     <Routes>

     
<Route exact path='/lifestyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>}>
  
</Route>

</Routes>
{/* ======Mobile ACCESSORIES======== */}
<Routes>

     
<Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}>
  
</Route>

</Routes>
<Heading text="PRODUCT REVIEWS"/>
<ProductReview ProductReview={data.productReviews}/>
<Heading text="VIDEOS"/>
<Videos Videos={data.videos}/>
<Heading text="IN THE PRESS"/>
<Banner banner={data.banner}/>
<Footer />
<EndFooter footer={data.footer}/> 
    </Router>
  );
}

export default App;
