import React from 'react';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import './Footer.css';
import { FooterOverlay, Newsletter } from '../../components';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay  />
    <Newsletter />

    <div className='app__footer-links'>
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
      </div>
      <div className="app__footer-links_logo">

      </div>
      <div className="app__footer-links_work">

      </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2024 Gerícht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;