import React from 'react';
import {logo} from '../assets';
import {socialMedia,footerLinks} from '../constants'
import styles from '../style.js'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new wat to make the payments easy, reliable and secure.</p>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap nd:nt-0 mt-10'>
        {footerLinks.map((linkGroup) => (
          <div key={linkGroup.title} className='flex flex-col ss-my-0 y-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>{linkGroup.title}</h4>
            <ul className='list-none mt-4'>
              {linkGroup.links.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary ${linkGroup.links.length - 1 !== index ? "mb-4" : "mb-0"}`}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Footer;