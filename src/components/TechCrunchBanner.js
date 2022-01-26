import React, { useState } from 'react'

const bannerLogo = '/images/banner/event.png';
const tokensImg = '/images/banner/tokens.png';
const buttonImg = '/images/banner/button.png';
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
      <img className='tc-banner-logo' src={bannerLogo} />
      <img src={tokensImg} className='tc-banner-icon' />
      <div className='tc-banner-buttons'>
        <img className='tc-banner-tc' src={tcImg} />
        <a
          href="https://techcrunch.com/events/defi-the-future-of-programmable-money/?utm_medium=website&utm_campaign=defisummit&utm_content=somm_web&utm_source=sommelier&promo=community"
          target="_blank"
        >
          <img className='tc-banner-register' src={buttonImg} />
        </a>
      </div>
    </div>
  )
}

export default TechCrunchBanner
