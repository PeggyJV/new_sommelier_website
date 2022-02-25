import Link from 'gatsby-link'
import React, { useState, useEffect } from 'react'
import SbEditable from 'storyblok-react'
import {isMobileOnly} from 'react-device-detect'

import { usePopperTooltip } from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

import cn from 'classnames';

const frameImg = '/images/Frame.png'
const notificationOffImg = '/images/notification-off.png';
const notificationOnImg = '/images/notification-on.png';

const Nav = ({ settings, lang, pathname }) => {
  const [showMenu, setShowMenu] = React.useState(!isMobileOnly)

  const [notification, setNotification] = useState(false);
  const [notificationErrMsg, setNotificationErrMsg] = useState('');
  const [notificationErrMsgSub, setNotificationErrMsgSub] = useState('');

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  useEffect(() => {
    // checkNotificationPermission();
    askNotificationPermission();
  }, [])

  const showAlert = () => {
      alert("I'm an alert");
    }

  const handleHamburger = () => {
    setShowMenu(!showMenu)
  }

  const handleMoveToSection = (e, msgId) => {
    if (pathname === '/') { // Only apply to home page
      e.preventDefault();
      const ref = document.querySelector(`#${msgId}`);
      if (ref) {
        ref.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }

  const checkNotificationPermission = () => {
    console.info('starting.....');
    if (typeof window === `undefined`) {
      setNotification(false);
      return;
    }

    if (!("Notification" in window)) {
      setNotification(false);
      setNotificationErrMsg('This browser does not support notifications.');
      setNotificationErrMsgSub('');
      return;
    }

    console.log('notification permission', Notification.permission);
    if (Notification.permission === 'denied') {
      setNotification(false);
      setNotificationErrMsg('To allow Notifications, go to your Browser Settings.');
      setNotificationErrMsgSub('You will only receive notifications when your Browser is open');
      return;
    }

    if (Notification.permission === 'default') {
      setNotification(false);
      setNotificationErrMsg('To receive Notifications, click to allow Notifications.');
      setNotificationErrMsgSub('You will only receive notifications when your Browser is open');
      return;
    }

    if (Notification.permission === 'granted') {
      setNotification(true);

      enableNotifications();
    }
  }

  const askNotificationPermission = () => {
    if (typeof window === `undefined`) {
      return;
    }

    if (!("Notification" in window)) {
      setNotification(false);
      setNotificationErrMsg('This browser does not support notifications.');
      setNotificationErrMsgSub('');
    } else {
      if(checkNotificationPromise()) {
        Notification.requestPermission()
        .then((permission) => {
          checkNotificationPermission();
        })
      } else {
        Notification.requestPermission(function(permission) {
          checkNotificationPermission();
        });
      }
    }
  }

  const checkNotificationPromise = () => {
    try {
      Notification.requestPermission().then();
    } catch(e) {
      return false;
    }

    return true;
  }

  const toggleNotification = (e) => {
    e.preventDefault();

    console.log(Notification.permission);

    if (notification === false) {
      askNotificationPermission();
    } else {

    }
  }

  const enableNotifications = async () => {
    if (typeof window === `undefined`) {
      return;
    }
    if (!('serviceWorker' in navigator)) {
      return;
    }
    if (!('PushManager' in window)) {
      return;
    }
    console.log(navigator);

    const sw = await navigator.serviceWorker.ready;
    console.log(sw);
    const subscription = await sw.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'BNDpN_mS7a-Os4xUorT-NPjhgRpgK7GoWsggHFF5psOTgbn5SPeo_G6rJeFzjqtVazgmt5bZDdHrsrGZH4uSJkE'
    });

    const apiBaseUrl = 'https://msg.sommelier.finance/api';
    // const apiBaseUrl = 'http://localhost:8001/api';

    await fetch(`${apiBaseUrl}/subscribe`, {
      method: 'POST',
      body: JSON.stringify(subscription),
      headers: {
        'content-type': 'application/json'
      }
    });

    console.log('service worker', subscription);
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
                  <a href='/#features' onClick={(e) => handleMoveToSection(e, 'features')} className='nav-menu-item'>Features</a>
                </li>

                <li key={2} >
                  <a href='/#usecases' onClick={(e) => handleMoveToSection(e, 'usecases')} className='nav-menu-item'>Use Cases</a>
                </li>

                <li key={3} >
                  <a href='/resources' className='nav-menu-item'>Resources</a>
                </li>

                <li key={4} >
                  <a href='/#about' onClick={(e) => handleMoveToSection(e, 'about')} className='nav-menu-item'>About</a>
                </li>


                <li key={5} >
                  <Link to={`https://community.sommelier.finance/`} className='nav-menu-item' target='new'>
                    {`Community`}
                  </Link>
                </li>

                <li key={6} >
                  <Link to={`/events/`} className='nav-menu-item'>
                    {`Events`}
                  </Link>
                </li>

                <li key={7} >
                  <Link to={`/blog/`} className='nav-menu-item'>
                    {`Blog`}
                  </Link>
                </li>

                <li key={6} >
                  <Link to={`/jobs`} className='nav-menu-item' >
                    {`Jobs`}
                  </Link>
                </li>
                <li key={7}>
                    <a
                      className='nav-menu-item'
                      onClick={(e) => toggleNotification(e)}
                      ref={setTriggerRef}
                    >
                      {!notification && <img src={notificationOffImg} height={27} />}
                      {notification && <img src={notificationOnImg} height={27} />}

                    </a>
                    {visible && !notification && notificationErrMsg && (
                      <div
                        ref={setTooltipRef}
                        {...getTooltipProps({ className: 'tooltip-container' })}
                      >
                        <div {...getArrowProps({ className: 'tooltip-arrow' })} />
                        <div style={{ textAlign: 'center' }}>{notificationErrMsg}</div>
                        <div style={{ textAlign: 'center', padding: '0 10px' }}>{notificationErrMsgSub}</div>
                      </div>
                    )}
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
