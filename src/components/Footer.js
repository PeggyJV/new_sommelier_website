import React from "react"
import SbEditable from "storyblok-react"

const Footer = () => {
  return (
    <footer className="text-center flex flex-col items-center py-20 mx-auto">
      <div className='footer_container'>
        <p>© 2021 Sommelier</p>
        <div className='footer__social-container'>
          <a href='#'>Telegram</a>
          <a href='#'>Discord</a>
          <a href='#'>Twitter</a>
        </div>
        <div className='footer__social-container-mobile'>
          <a href='#'><img src='/images/ico-telegram.png' alt='Automated Image' width='24' /></a>
          <a href='#' className='ml-4'><img src='/images/ico-discord.png' alt='Automated Image' width='24' /></a>
          <a href='#' className='ml-4'><img src='/images/ico-twitter.png' alt='Automated Image' width='24' /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
