import Link from 'gatsby-link'
import React from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'

const frameImg = '/images/Frame.png'

const Nav = ({ settings, lang }) => {
  const [showMenu, setShowMenu] = React.useState(!isMobileOnly)

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
                {settings &&
                  settings.content.main_navi.map((navitem, index) => (
                    <SbEditable content={navitem} key={navitem._uid}>
                    <li key={index}>
                      <Link to={`/${navitem.link.cached_url.replace('en/', '').replace('home', '')}`} prefetch='true' className='nav-menu-item'>
                        {navitem.name}
                      </Link>
                    </li>
                    </SbEditable>
                  ))}
                <li key={999} className='d-flex align-items-center launch-button'>
                  <Link to={``} prefetch='true' className='nav-menu-item nav-menu-item--launch'>
                    <img src={frameImg} alt='frame image' className='mr-2'/>
                    {`Launch Application`}
                  </Link>
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
