import React from 'react'
import Link from 'gatsby-link'

const frameImg = require('/src/assets/images/Frame.png')
const etheriumImg = require('/src/assets/images/etherium.png')
const etheriumImg1 = require('/src/assets/images/etherium-1.png')
const cosmosImg = require('/src/assets/images/cosmos.png')
const etherbridgeImg = require('/src/assets/images/ether-bridge.png')
const secureImg = require('/src/assets/images/secure.png')
const automatedImg = require('/src/assets/images/automated.png')

export default function Main(){
  return (
    <div className='mt-5 main-container'>
      <div className='main-top row'>
        <div className='main-top__left-container'>
          <div>
            <h1 className='text-uppercase'>
              Welcome to<br/>Sommelier<br />the <span >new brain</span><br />for Ethereum
            </h1>
            <p className='caption-text-small' style={{marginTop: '2rem'}}>Move your DeFi assets into higher<br />yields faster and cheaper</p>
            <Link to={``} prefetch='true' className='launch-button' style={{ marginTop: '4.063rem'}}>
              <img src={frameImg} alt='frame image' className='mr-2'/>
              {`Launch Application`}
            </Link>
          </div>
        </div>
        <div className='main-top__right-container'>
          <img src={etheriumImg} alt='frame image' className='mr-2'/>
        </div>
      </div>
      <div className='main-why mr-5'>
        <div className='main-top__left-container'>
          <h2 className='text-uppercase'>
            Why <span >Sommelier</span>
          </h2>
        </div>
        <div className='main-why__content row'>
          <div className='main-why__content__img-container'>
            <img src={etheriumImg1} alt='etherium image' className='mr-2'/>
          </div>
          <div className='main-why__right-container'>
            <ul>
              <li>
                <img src={cosmosImg} alt='Cosmos Image' />
                <h4>Cosmos Stargate SDK</h4>
                <p>Modular and robust protocol with Tendermint Consensus delivers world class and tested protocol layer</p>
              </li>
              <li>
                <img src={etherbridgeImg} alt='Ether Bridge Image' />
                <h4>Bi-Directional Ethereum Bridge</h4>
                <p>Ethereum transactions are managed by the most functional bridge optimized for extending Ethereum features for users</p>
              </li>
              <li>
                <img src={secureImg} alt='Secure Image' />
                <h4>Secure</h4>
                <p>Transactions are managed by Sommelier validator set with decentralized governance. Sommelier cannot steal user funds</p>
              </li>
              <li>
                <img src={automatedImg} alt='Automated Image' />
                <h4>Automated</h4>
                <p>Automate signature intense Ethereum transactions enable automated DeFi trading for increased liquidity momentum and yield capture</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}