import Link from 'gatsby-link'
import React from 'react'
import SbEditable from 'storyblok-react'

const frameImg = require('/src/assets/images/Frame.png')

const Nav = ({ settings, lang }) => (
  <header className='container-fluid'>
    <nav className='' role='navigation'>
      <div className='nav-container d-flex container align-items-center'>
        <div className='text-primary'>
          <Link to='/'> 
            <p className='nav-title m-0'>SOMMELIER</p>
          </Link>
        </div>
        <div className='d-none'>
          <button
            className=''
            type='button'
          >
            <svg
              className='h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div className='d-flex flex-grow-1'>
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
              <Link to={``} prefetch='true' className='nav-menu-item nav-menu-item--launch ml-3'>
                <img src={frameImg} alt='frame image' className='mr-2'/>
                {`Launch Application`}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Nav;
