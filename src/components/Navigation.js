import Link from 'gatsby-link'
import React from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'

const frameImg = '/images/Frame.png'

const Nav = ({ settings, lang }) => {
  const [showMenu, setShowMenu] = React.useState(!isMobileOnly)

  const showAlert = () => {
      alert("I'm an alert");
    }

  const handleHamburger = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className='container-fluid'>
      <nav className='' role='navigation'>
        <div className='nav-container d-flex container'>
          <div className='text-primary nav-container__title'>
            <button onClick={handleHamburger} className='d-block d-sm-none'>
              <img src='/images/button-hamburger.png' width='24' />
            </button>
            <Link to='/'>
              <p className='nav-title m-0'>SOMMELIER</p>
            </Link>
          </div>
          {showMenu && (
            <div className='flex-grow-1 nav-container__menu-container'>
              <ul className='ml-auto'>
                {

                }


                <li key={1} >
                  <a href='/#features' className='nav-menu-item'>Features</a>
                </li>

                <li key={2} >
                  <a href='/#usecases' className='nav-menu-item'>Use Cases</a>
                </li>

                <li key={3} >
                  <a href='/#roadmap' className='nav-menu-item'>Road Map</a>
                </li>

                <li key={4} >
                  <a href='/#about' className='nav-menu-item'>About</a>
                </li>

                <li key={5} >
                  <Link to={`/blog/`}  className='nav-menu-item'>
                    {`Blog`}
                  </Link>
                </li>

                <li key={999} className='d-flex align-items-center launch-button'>
                  <a href="https://app.sommelier.finance" className='nav-menu-item nav-menu-item--launch' target="_blank">
                  <img src={frameImg} alt='frame image' className='mr-2'/>
                    Launch Application
                  </a>
                </li>
              </ul>
            </div>

          )}
        </div>
      </nav>
    </header>
  )
};

export default Nav;
