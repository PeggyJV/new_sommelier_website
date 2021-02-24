import React from 'react'
import Link from 'gatsby-link'

const frameImg = require('/src/assets/images/Frame.png')
const etheriumImg = require('/src/assets/images/etherium.png')
const etheriumImg1 = require('/src/assets/images/etherium-1.png')
const cosmosImg = require('/src/assets/images/cosmos.png')
const etherbridgeImg = require('/src/assets/images/ether-bridge.png')
const secureImg = require('/src/assets/images/secure.png')
const automatedImg = require('/src/assets/images/automated.png')
// Use Cases
const imperImg = require('/src/assets/images/impermanent.png')
const rebalancingImg = require('/src/assets/images/rebalancing.png')
const lowerImg = require('/src/assets/images/lower-ether.png')
const greaterImg = require('/src/assets/images/greater.png')

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
      <div className='main-why section-container mr-5'>
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
      <div className='main-usecases section-container'>
        <div className='main-top__left-container'>
          <h2 className='text-uppercase'>
            Use Cases
          </h2>
        </div>
        <div className='main-usecases__content'>
          <ul>
            <li>
              <div>
                <img src={imperImg} alt='Cosmos Image' />
                <h3>Impermanent Loss Protection</h3>
                <p>Automatically rebalance your portfolio when pool performance changes such that Impermanent and unrealized losses require a change in strategy</p>
              </div>
              
            </li>
            <li>
              <div>
                <img src={rebalancingImg} alt='Ether Bridge Image' />
                <h3>Automated Portfolio Rebalancing</h3>
                <p>Automatically rebalance portfolio to focus on high yield Liquidity Provider opportunities and exit lower yielding opportunities</p>
              </div>
            </li>
            <li>
              <div>
                <img src={lowerImg} alt='Secure Image' />
                <h3>Lower Ethereum Gas<br />Transaction Fees</h3>
                <p>Aggregating and batching transactions with Sommelier will yield lower gas prices for LP growing demand to manage pool position and performance</p>
              </div>
            </li>
            <li>
              <div>
                <img src={greaterImg} alt='Automated Image' />
                <h3>Greater Liquidity Momentum</h3>
                <p>Automatically rebalance your portfolio when pool performance changes such that Impermanent and unrealized losses require a change in strategy</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}