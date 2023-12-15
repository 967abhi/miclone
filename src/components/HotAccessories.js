import React from 'react';
import Hotitemcard from './Hotitemcard';
import "../styles/HotAccessories.css"

const HotAccessories = ({ music, musicCover , smartDevice , smartDeviceCover , home , homeCover,lifestyle , lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
      <div>
        <img src={musicCover || smartDeviceCover || homeCover || lifestyleCover || mobileAccessoriesCover} alt='cover' />
      </div>
      {/* --------------2nd------------------------- */}
      <div className='music'>
        {Array.isArray(music) &&
          music.map((item, index) => (
            <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))}
             <Hotitemcard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
             
      </div>
      <div className='smartDevice'>
        {Array.isArray(smartDevice) &&
          smartDevice.map((item, index) => (
            <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))}
       
      </div>
      <div className='home'>
        {Array.isArray(home) &&
          home.map((item, index) => (
            <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
       
          ))}
            
      </div>
      {/* ====lifestyle=== */}
      <div className='lifestyle'>
        {Array.isArray(lifestyle) &&
          lifestyle.map((item, index) => (
            <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))}
      </div>
      {/* mobileAccessories */}
      <div >
        {Array.isArray(mobileAccessories) &&
          mobileAccessories.map((item, index) => (
            <Hotitemcard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
          ))}
          
      </div>
      
    </div>
  );
};

export default HotAccessories;
