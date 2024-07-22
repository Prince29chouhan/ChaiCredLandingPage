// src/ApplyPage.js
import React, { useState } from 'react';
import './about.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('');

  return (
    <div className="apply-container" id='about'>
      <section className="apply-section">
      <h3 className="apply-heading glass">
              Our thesis driven differentiated funds provide our limited partners exposure to web3 assets that generate alpha.
            </h3>
        <div className="glass-effect">
          <div className="apply-text">
            <div className='flex w-full flex-col'>
            
            <h4 className="apply-subheading">Apply Now for Investor or Founders</h4>
            <p className="apply-paragraph">
              Catalyst brings ideas, capital, operational resources, and talent together. We partner with founders to transform the best ideas into groundbreaking protocols.
            </p>
            </div>
            <div className="apply-buttons">
              <button  href="#found" 
              className={`nav-link apply-button found ${activeTab === 'found' ? 'active' : ''}`}
            onClick={() => setActiveTab('found')}>
                <div className='flex flex-col justify-center'>
                  <span className="number">01</span>
                  <span className="role font-bold">Founders</span>
                  <span className="description">Apply to co-founder with Catalyst</span>
                </div>
                <span className="arrow">&#10142;</span>
              </button>
              <a 
              href="#investor" 
              className={`nav-link apply-button inv ${activeTab === 'investor' ? 'active' : ''}`}
            onClick={() => setActiveTab('investor')}>
                <div className='flex flex-col justify-center'>
                  <span className="number text-center">02</span>
                  <span className="role font-bold text-center">Investors</span>
                  <span className="description">Apply to co-invest with Catalyst</span>
                </div>
                <span className="arrow">&#10142;</span>
              </a>
            </div>
          </div>
          <div className="apply-image">
            <img src="/path-to-your-image.jpg" alt="Illustration" className="rounded" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
