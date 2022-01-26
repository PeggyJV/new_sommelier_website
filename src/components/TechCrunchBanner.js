import React, { useState } from 'react'

const bannerLogo = '/images/banner/event.svg';
const tokensImg = '/images/banner/tokens.png';
const buttonImg = '/images/banner/button.svg';
const tcImg = '/images/banner/tc.svg';
const closeImg = '/images/banner/close.png';

const TechCrunchBanner = () => {
  const [show, setShow] = useState(true)

  if (!show) {
    return null
  }

  return (
    <div className='tc-banner'>
      <img className='tc-banner-close' src={closeImg} onClick={(e) => setShow(false)} />
      <div className='tc-banner-logo'>
        <img src={bannerLogo} />
      </div>
      <div className='tc-banner-icon'>
        <img src={tokensImg} />
      </div>
      <div className='tc-banner-buttons'>
        <img src={tcImg} />
        <a
          href="https://techcrunch.com/events/defi-the-future-of-programmable-money/?utm_medium=website&utm_campaign=defisummit&utm_content=somm_web&utm_source=sommelier&promo=community&display=true"
          target="_blank"
        >
          <img src={buttonImg} />
        </a>
      </div>
    </div>
  )
}

export default TechCrunchBanner
