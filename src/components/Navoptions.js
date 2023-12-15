import React, { useState, useEffect } from 'react';
import NavCard from "./NavCard.js";
import "../styles/Navoptions.css";

const Navoptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;

    setMiPhoneToggle(path === "/#miphones");
    setRedmiPhoneToggle(path === "/#redmiphones");
    setTvToggle(path === "/#tv");
    setLaptopToggle(path === "/#laptops");
    setFitnessToggle(path === "/#lifestyle");
    setHomeToggle(path === "/#home");
    setAudioToggle(path === "/#audio");
    setAccessoriesToggle(path === "/#accessories");

  }, []);

  return (
    <div className='navoptions'>
      {miPhoneToggle ? miPhones.map((item) => (
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {redmiPhoneToggle ? redmiPhones.map((item) => (
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {tvToggle ? tv.map((item) => (
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {laptopToggle ? laptop.map((item) => (
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {fitnessToggle ? fitnessAndLifeStyle.map((item) => (
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {homeToggle ? home.map((item) => (
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {audioToggle ? audio.map((item) => (
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {accessoriesToggle ? accessories.map((item) => (
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}
    </div>
  );
}

export default Navoptions;
