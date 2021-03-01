import React from 'react'
import Link from 'gatsby-link'
import Profile from '../components/Profile'
import {isMobileOnly} from 'react-device-detect'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const frameImg = '/images/Frame.png'
const etheriumImg = '/images/etherium.png'
const etheriumImg1 = '/images/etherium-1.png'
const etheriumMobileImg = '/images/img-ether-mobile.png'
const cosmosImg = '/images/cosmos.png'
const etherbridgeImg = '/images/ether-bridge.png'
const secureImg = '/images/secure.png'
const automatedImg = '/images/automated.png'
// Use Cases
const imperImg = '/images/impermanent.png'
const rebalancingImg = '/images/rebalancing.png'
const lowerImg = '/images/lower-ether.png'
const greaterImg = '/images/greater.png'
// Roadmap
const stickImg = '/images/roadmap-stick1.png'
const stickMobileImg = '/images/roadmap-stick-mobile.png'
// About
const aboutImg = '/images/img-about1.png'
// Team
const teamMembers1 = [
  {
    name: 'Zaki Mainan',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-zaki.png'
  },
  {
    name: 'Jack Zampolin',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-jack.png'
  },
  {
    name: 'Kevin Kennis',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-kevin.png'
  }
]
const teamMembers2 = [
  {
    name: 'Tony Arcieri',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-tony.png'
  },
  {
    name: 'Justin Kilpatrick',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-justin.png'
  },
  {
    name: 'Deborah Simpier',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-deborah.png'
  },
  {
    name: 'Jehan Tremback',
    role: 'Co-Founder',
    avatar: '/images/avatar/avatar-jehan.png'
  }
]
const whyData = [
  {
    img: cosmosImg,
    title: 'Cosmos Stargate SDK',
    description: 'Modular and robust protocol with Tendermint Consensus delivers world class and tested protocol layer',
  },
  {
    img: etherbridgeImg,
    title: 'Bi-Directional Ethereum Bridge',
    description: 'Automatically rebalance your portfolio when pool performance changes such that Impermanent and unrealized losses require a change in strategy',
  },
  {
    img: secureImg,
    title: 'Secure',
    description: 'Transactions are managed by Sommelier validator set with decentralized governance. Sommelier cannot steal user funds',
  },
  {
    img: automatedImg,
    title: 'Automated',
    description: 'Automate signature intense Ethereum transactions enable automated DeFi trading for increased liquidity momentum and yield capture',
  },
]
const usecasesData = [
  {
    img: imperImg,
    title: 'Impermanent Loss Protection',
    description: 'Automatically rebalance your portfolio when pool performance changes such that Impermanent and unrealized losses require a change in strategy',
  },
  {
    img: rebalancingImg,
    title: 'Automated Portfolio Rebalancing',
    description: 'Automatically rebalance portfolio to focus on high yield Liquidity Provider opportunities and exit lower yielding opportunities',
  },
  {
    img: lowerImg,
    title: 'Lower Ethereum Gas Transaction Fees',
    description: 'Aggregating and batching transactions with Sommelier will yield lower gas prices for LP growing demand to manage pool position and performance',
  },
  {
    img: greaterImg,
    title: 'Greater Liquidity Momentum',
    description: 'Automatically rebalance your portfolio when pool performance changes such that Impermanent and unrealized losses require a change in strategy',
  },
]

const teamMembers3 = [...teamMembers1, ...teamMembers2]
// Investors
const cygnilabsImg = '/images/investors/ico-cygnilabs.png'
const standardImg = '/images/investors/ico-standard.png'
const multicoinImg = '/images/investors/ico-multicoin.png'
const alamedaImg = '/images/investors/ico-alameda.png'

const sliderSettings = {
  dots: true,
  duration: 100,
  dots: false,
  centerMode: true
}
export default function Main(){
  return (
    <div className='mt-5 main-container'>
      <div className='main-top'>
        <div className='main-top__left-container'>
          <div>
            <h1 className='text-uppercase d-lg-block d-md-none d-block'>
              Welcome to<br/>Sommelier<br />the <span >new brain</span><br />for Ethereum
            </h1>
            <h1 className='text-uppercase d-lg-none d-md-block d-none'>
              Welcome to Sommelier the <span >new brain</span><br />for Ethereum
            </h1>
            <p className='caption-text-small' style={{marginTop: '2rem'}}>Move your DeFi assets into higher<br />yields faster and cheaper</p>
            <Link to={``} prefetch='true' className='launch-button'>
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
            <img src={etheriumImg1} alt='etherium image' className='mr-2 main-why__content__img-container__img'/>
            <img src={etheriumMobileImg} alt='etherium image' className='mr-2 main-why__content__img-container__img-mobile' width='74'/>
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
          {isMobileOnly ? (
            <Carousel 
              plugins={[
                'centered',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ]}
            >
              {usecasesData.map((item, index) => (
                <div>
                  <img src={item.img} width='106' />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </Carousel>
          ) : (
            <ul>
              {usecasesData.map((item, index) => (
                <li>
                  <div>
                    <img src={item.img} width='106' />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='main-roadmap'>
        <div className='main-top__left-container'>
          <h2 className='text-uppercase'>
            Roadmap
          </h2>
        </div>
        <div className='main-roadmap__content'>
          <div className='main-roadmap__content__q-left'>
            <div>
              <h3>Q2 2021</h3>
              <ul>
                <li><span>Sommelier Testnet Alpha 1 Live</span></li>
                <li>Sommelier Testnet Audit complete<br /></li>
                <li>Sommelier Testnet Alpha 2 Live<br /></li>
                <li>Sommelier Public Validator Invite<br /></li>
                <li>Sommelier Mainnet 1 Live</li>
              </ul>
            </div>
          </div>
          <img className='main-roadmap__content__stick' src={stickImg} width='35' height='794'></img>
          <img className='main-roadmap__content__stick-mobile' src={stickMobileImg} width='30' height='824'></img>
          <div className='main-roadmap__content__q-right'>
            <div className='main-roadmap__content__q-right__1'>
              <h3>Q1 2021</h3>
              <ul>
                <li><span>Uniswap and Ethereum Oracles on Cosmos SDK<br /></span></li>
                <li>Ethereum Liquidity Logic implemented on Gravity<br /></li>
                <li>Ethereum and Cosmos wallet integration complete<br /></li>
                <li>Sommelier Impermanent Loss tracking app live</li>
              </ul>
            </div>
            <div className='main-roadmap__content__q-right__3'>
              <h3>Q2 2021</h3>
              <ul>
                <li>Sommelier Testnet Alpha 1 Live<br /></li>
                <li>Sommelier Testnet Audit complete<br /></li>
                <li>Sommelier Testnet Alpha 2 Live<br /></li>
                <li>Sommelier Public Validator Invite<br /></li>
                <li>Sommelier Mainnet 1 Live</li>
              </ul>
            </div>
            <div className='main-roadmap__content__q-right__2'>
              <h3>Q1 2021</h3>
              <ul>
                <li>Sommelier Automated DeFi Selections on Uniswap<br /></li>
                <li>Sommelier Automated DeFi Selections on Sushiswap<br /></li>
                <li>Sommelier Automated DeFi Selections on Binance Chain<br /></li>
                <li>Sommelier DAO launches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='main-about section-container'>
        <div className='main-about__left'>
          <div className='main-about__left__img-container'/>
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
        <div className='main-team__all'>
          {isMobileOnly ? (
            <Carousel 
              plugins={[
                'centered',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1.5,
                  },
                },
              ]}
            >
              {teamMembers3.map((item, index) => (
                <div>
                  <Profile data={item} isPortrait={index < 6 ? true : isMobileOnly ? true : false} /> 
                </div>
              ))}
            </Carousel>
          ) : (
            <ul>
              {teamMembers3.map((item, index) => (
                <li style={index < 6 ? {width: '50%'} : {width: '100%'}}>
                  <Profile data={item} isPortrait={index < 6 ? true : isMobileOnly ? true : false} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className='main-investors section-container'>
        <h2 className="text-center">INVESTORS</h2>
        <div className='main-investors__img-container'>
          <img src={cygnilabsImg} width='112' />
          <img src={standardImg} width='134' />
          <img src={multicoinImg} width='271' />
          <img src={alamedaImg} width='261' />
        </div>
      </div>
    </div>
  )
}
