import React from "react"
import SbEditable from "storyblok-react"

const Footer = () => {
  return (
    <div class="container">
    <footer className="text-center flex flex-col items-center py-20 mx-auto">
      <div className='footer_container'>
        <p>© 2021 Sommelier</p>
        <div className='footer__social-container'>
          <a href='https://t.me/getsomm' target="_blank">Telegram</a>
          <a href='https://discord.gg/ZcAYgSBxvY' className='ml-4' target="_blank">Discord</a>
          <a href='https://twitter.com/sommfinance' className='ml-4' target="_blank">Twitter</a>
        </div>
        <div className='footer__social-container-mobile'>
          <a href='https://t.me/getsomm' target="_blank"><img src='/images/ico-telegram.png' alt='Telegram' width='24' /></a>
          <a href='https://twitter.com/sommfinance' className='ml-4' target="_blank"><img src='/images/ico-discord.png' alt='Discord' width='24' /></a>
          <a href='https://discord.gg/ZcAYgSBxvY' className='ml-4' target="_blank"><img src='/images/ico-twitter.png' alt='Twitter' width='24' /></a>
        </div>
      </div>
      <br/><br/>Sommelier is alpha software. Sommelier is non-custodial and has no warranties. We also do not endorse any pools that we share on our channels. Pools may be compromised and things on Sommelier break all the time and you may lose your money. We are not giving you investment advice with this update and Sommelier does not control your funds. Again, all our software is alpha and undergoing daily updates and things can break all the time.<br/><br/>
    </footer>
    </div>
  )
}

export default Footer
