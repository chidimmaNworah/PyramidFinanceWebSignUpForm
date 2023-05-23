import React from 'react';
import { phone, threeinone } from '../assets';

const PhoneSlider = () => {
  return (
    <div className="gradient-bg bg-cover bg-no-repeat bg-center flex flex-col justify-around p-5 items-center w-full sm:w-2/5 text-sm text-center">
      <p className="mb-6 text-[1.2rem]">
        Social media shared today, tomorrow or by location
      </p>
      <div className="ellipse-gradient rounded-full w-full h-[70%]">
        {/* <div class="relative">
          <div className="flex flex-row justify-center items-center gap-4">
            <div class="rounded-lg top-12 left-[3rem]">
              <img src={phone} alt="phone" className="w-[12rem]" />
            </div>

            <div class="rounded-lg left-[15rem] top-12">
              <img src={phone} alt="phone" className="w-[12rem]" />
            </div>
          </div>
          <div class="mt-[-80%] ml-[10rem] rounded-lg left-[7.8rem] top-3">
            <img src={phone} alt="phone" className="w-[18rem]" />
          </div>
        </div> */}
        <div className="flex flex-row justify-center-items-center">
          <img src={threeinone} alt="photothree" />
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="rounded-full w-[4.2px] h-[4.2px] bg-white/70 m-[2px]"></div>
        <div className="rounded-full w-[6.2px] h-[6.2px] bg-white m-[2px]"></div>
        <div className="rounded-full w-[4.2px] h-[4.2px] bg-white/70 m-[2px]"></div>
      </div>
    </div>
  );
};

export default PhoneSlider;
