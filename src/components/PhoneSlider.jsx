import React, { useEffect, useState } from 'react';
import { phone } from '../assets';

const PhoneSlider = () => {
  const [carouselArray, setCarouselArray] = useState([]);
  const carouselControls = ['.', '.'];

  useEffect(() => {
    const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    setCarouselArray(galleryItems);
  }, []);

  const updateGallery = () => {
    carouselArray.forEach((el) => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
    });

    carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i + 1}`);
    });
  };

  const setCurrentState = (direction) => {
    if (direction.className === 'gallery-controls-previous') {
      setCarouselArray((prevArray) => [prevArray.pop(), ...prevArray]);
    } else {
      setCarouselArray((prevArray) => [...prevArray.slice(1), prevArray[0]]);
    }
    updateGallery();
  };

  const setControls = () => {
    const controls = carouselControls.map((control) => (
      <button
        key={control}
        className={`gallery-controls-${control}`}
        onClick={() => setCurrentState(control)}
      >
        {control}
      </button>
    ));

    const middleButton = (
      <p
        key="middle"
        className="text-[10rem] text-white mb-[0.8rem] -mx-[0.7rem]"
        onClick={() => {
          // Add your logic for the middle button
        }}
      >
        .
      </p>
    );

    // Insert the middle button between the existing buttons
    const controlsWithMiddle = controls
      .slice(0, 1)
      .concat(middleButton, controls.slice(1));

    return controlsWithMiddle;
  };

  return (
    <div className="gradient-bg bg-cover bg-no-repeat bg-center flex flex-col justify-around p-5 items-center w-full sm:w-2/5 text-sm text-center">
      <p className="mb-6 text-[1.2rem]">
        Social media shared today, tomorrow or by location
      </p>
      <div className="gallery">
        <div className="gallery-container">
          <img
            src={phone}
            alt="img"
            className={`gallery-item gallery-item-1 ${
              carouselArray.length >= 1 ? '' : 'hidden'
            }`}
            data-index="1"
          />
          <img
            src={phone}
            alt="img"
            className={`gallery-item gallery-item-2 ${
              carouselArray.length >= 2 ? '' : 'hidden'
            }`}
            data-index="2"
          />
          <img
            src={phone}
            alt="img"
            className={`gallery-item gallery-item-3 ${
              carouselArray.length >= 3 ? '' : 'hidden'
            }`}
            data-index="3"
          />
        </div>
        <div className="gallery-controls">{setControls()}</div>
      </div>
    </div>
  );
};

export default PhoneSlider;
