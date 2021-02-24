import React from 'react'
import Link from 'gatsby-link'
import Profile from '../components/Profile'

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
// Roadmap
const stickImg = require('/src/assets/images/roadmap-stick1.png')
// About
const aboutImg = require('/src/assets/images/img-about1.png')

// Team
const teamMembers1 = [
  {
    name: 'Zaki Mainan',
    role: 'Co-Founder',
    avatar: require('/src/assets/images/avatar/avatar-zaki.png')
  },
  {
    name: 'Jack Zampolin',
    role: 'Co-Founder',
    avatar: require('/src/assets/images/avatar/avatar-jack.png')
  },
  {
    name: 'Kevin Kennis',
    role: 'Co-Founder',
    avatar: require('/src/assets/images/avatar/avatar-kevin.png')
  }
]
const teamMembers2 = [
  {
    name: 'Tony Arcieri',
    role: 'Co-Founder',
    avatar: require('/src/assets/images/avatar/avatar-tony.png')
  },
  {
    name: 'Justin Kilpatrick',
    role: 'Co-Founder',
    avatar: require('/src/assets/images/avatar/avatar-justin.png')
  },
  {
    name: 'Deborah Simpier',
    role: 'Co-Founder',
    avatar: require('/src/assets/images/avatar/avatar-deborah.png')
  },
  {
    name: 'Jehan Tremback',
    role: 'Co-Founder',
    avatar: require('/src/assets/images/avatar/avatar-jehan.png')
  }
]

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
              <img src={frameImg} alt='frame image' />
              {`Launch Application`}
            </Link>
          </div>
        </div>
        <div className='main-top__right-container'>
          <img src={etheriumImg} alt='frame image' />
        </div>
      </div>
      <div className='main-why section-container'>
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
      <div className='main-roadmap'>
        <div className=''>
          <h2 className='text-uppercase'>
            Roadmap
          </h2>
        </div>
        <div className='main-roadmap__content'>
          <div className='main-roadmap__content__q-left'>
            <div>
              <h3>Q2 2021</h3>
              <p>
                Uniswap and Ethereum Oracles on Cosmos SDK<br />
                Ethereum Liquidity Logic implemented on Gravity<br />
                Ethereum and Cosmos wallet integration complete<br />
                Sommelier Impermanent Loss tracking app live
              </p>
            </div>
          </div>
          <img src={stickImg}></img>
          <div className='main-roadmap__content__q-right'>
            <div className='main-roadmap__content__q-right__1'>
              <h3>Q1 2021</h3>
              <p>
                Sommelier Testnet Alpha 1 Live<br />
                Sommelier Testnet Audit complete<br />
                Sommelier Testnet Alpha 2 Live<br />
                Sommelier Public Validator Invite<br />
                Sommelier Mainnet 1 Live
              </p>
            </div>
            <div className='main-roadmap__content__q-right__2'>
              <h3>Q1 2021</h3>
              <p>
                Sommelier Automated DeFi Selections on Uniswap<br />
                Sommelier Automated DeFi Selections on Sushiswap<br />
                Sommelier Automated DeFi Selections on Binance Chain<br />
                Sommelier DAO launches
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='main-about section-container'>
        <div className='main-about__left'>
          <img src={aboutImg} />
        </div>
        <div className='main-about__right'>
          <h2>About</h2>
          <p>
          Sommelier is a bet that Ethereum will be a dominant<br />
          player in the global economy. Sommelier consists of the<br />
          Cosmos Stargate SDK, its Tendermint-based consensus<br />
          layer and a decentralized, bi-directional Ethereum bridge,<br />
          managed by a global network of validators.<br />
          <br />
          Liquidity Providers (LPs) will be able to use the Sommelier<br />
          to author and execute complex, and automated financial<br />
          transactions, such as portfolio rebalancing, limit orders,<br />
          batched orders, as well as a host of other features that<br />
          traders have come to expect from CeFi, but that are not<br />
          currently available in DeFi.
          </p>
          <Link to={``} prefetch='true' className='launch-button' style={{ marginTop: '4.063rem'}}>
            <img src={frameImg} alt='frame image' className='mr-2'/>
            {`Launch Application`}
          </Link>
        </div>
      </div>
      <div className='main-team section-container'>
        <h2>Team</h2>
        <div className='main-team__top'>
          {teamMembers1 && (
            <ul>
              {teamMembers1.map((item, index) => (
                <li>
                  <Profile data={item} isPortrait={true} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='main-team__down'>
          {teamMembers2 && (
            <ul>
              {teamMembers2.map((item, index) => (
                <li>
                  <Profile data={item} isPortrait={false} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}