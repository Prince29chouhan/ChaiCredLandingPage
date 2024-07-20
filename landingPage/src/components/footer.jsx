import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Foot = () => {
  return (
    <footer className="footer" id='footer'>
      <div className="footer-top">
        <div className="footer-logo">
          <span>Catalyst<span className="dot">.</span></span>
        </div>
        <div className="footer-links">
          <a href="#funds">Funds</a>
          <a href="#labs">Labs</a>
          <a href="#accelerator">Accelerator</a>
          <a href="#coming-soon" className="coming-soon">Coming Soon</a>
          <a href="#team">Team</a>
          <a href="#podcasts">Podcasts</a>
          <a href="#writings">Writings</a>
        </div>
        <div className="footer-social">
          <a href="#email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2023 Catalyst Networks. All rights reserved.
      </div>
    </footer>
  );
};

export default Foot;
