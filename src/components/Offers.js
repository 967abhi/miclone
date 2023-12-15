import React from 'react'

const Offers = ({src,link,index}) => {
  return (
    <>
    
    <a href={link}>
        <img src="https://in.event.mi.com/in/offer-with-mi" alt={`${index} offer`}></img>
    </a>


    
    </>
   
    
  )
}

export default Offers
