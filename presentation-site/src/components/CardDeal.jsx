import React from 'react';
import {card} from '../assets';
import styles, {layout} from '../style.js';
import Button from './Button.jsx';

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal<br className='sm:block hidden' />
          {" "}in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in dapibus dolor, quis mollis nisl.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Vivamus non dapibus neque. Nullam blandit pellentesque turpis, nec tristique nulla volutpat eu.
          Ut mollis lorem quis metus scelerisque faucibus.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%]' /> 
      </div>
    </section>
  );
};

export default CardDeal;