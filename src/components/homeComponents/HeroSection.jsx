import React from 'react';
import '@homestyles/heroSection.css';
import arrow from '@assets/arrow.svg';

const HeroSection = () => {
  return (
    <div className='heroSection'>
        <div className="heroSect_desc">
            <h1 className='hero_title'>Dress like a King with our designer wears</h1>
            <div className="hero_cta">
                <p className='cta_text'>Shop Now</p>
                <img src={arrow} alt="arrow icon" className="arrow" />
            </div>
        </div>
        <div className="overlay"></div>
    </div>
  )
}

export default HeroSection;