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
      <br/><br/>This website does not constitute an offer to sell or a solicitation of interest to purchase any securities in any country or jurisdiction in which such offer or solicitation is not permitted by law. Nothing on this website is meant to be construed as investment advice and we do not provide investment advisory services, nor are we regulated or permitted to do so. This website is provided for convenience only. Sommelier does not manage any portfolios. You must make an independent judgment as to whether to add liquidity to portfolios.<br /><br />
      Users of the Sommelier website should familiarize themselves with smart contracts to further consider the risks associated with smart contracts before adding liquidity to any portfolios.<br /><br />
      Note that the website may change, and we are under no obligation to update or advise as to these changes. There is no guarantee that the Sommelier Mainnet, including any software, products or token use cases mentioned on the website, will be built, or offered by Sommelier. In particular, actual results and developments may be materially different from any forecast, opinion or expectation expressed in this website, or documents contained in it, and the past performance of any portfolio must not be relied on as a guide to its future performance.<br /><br />
      To the extent permitted by law, the company and its directors, officers, employees, agents exclude all liability for any loss or damage arising from the use of, or reliance on, the material contained on this website whether or not caused by a negligent act or omission. The release, publication or distribution of this website and any materials herein may be restricted in some jurisdiction and therefore you must inform yourself of and observe any such restrictions.<br /><br />
    </footer>
    </div>
  )
}

export default Footer
