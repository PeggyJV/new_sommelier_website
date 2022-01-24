import React, { useState } from 'react'

const bannerLogo = '/images/banner/event.svg';
const tokensImg = '/images/banner/tokens.svg';
const buttonImg = '/images/banner/button.svg';
const closeImg = '/images/banner/close.png';

const TechCrunchBanner = () => {
  const [show, setShow] = useState(true)

  if (!show) {
    return null
  }

  return (
    <div className='tc-banner'>
      <img className='tc-banner-close' src={closeImg} onClick={(e) => setShow(false)} />
      <img className='tc-banner-logo' src={bannerLogo} />
      <img className='tc-banner-icon' src={tokensImg} />
      <a
        href="https://techcrunch.com/events/defi-the-future-of-programmable-money/?utm_medium=website&utm_campaign=defisummit&utm_content=somm_web&utm_source=sommelier&promo=community&display=true"
        target="_blank"
      >
        <img className='tc-banner-button' src={buttonImg} />
      </a>
    </div>
  )
}

export default TechCrunchBanner
