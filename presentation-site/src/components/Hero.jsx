import React from 'react';
import {discount, robot} from '../assets';
import GetInTouch from './GetInTouch.jsx';
import styles from '../style.js';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[9px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discout' className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20% </span>
            Discount For {" "}
            <span className='text-white'>1 Month</span>
          </p>          
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            The Next <br className='sm:block hidden' /> 
            <span className='text-gradient'>Generation</span>
          </h1>

          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetInTouch />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
            Payment Method
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
          Hello! Here goes the text you want to apply for this template.
          I am going to use it myself (edited) for my future portfolio, but feel
          free to use on your own projects! Cheers!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] h-[100%] rel z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] rounded-full bottom-40 w-[50%] h-[80%] white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetInTouch />
      </div>
    </section>
  );
};

export default Hero;