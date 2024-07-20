import React from 'react';
import './join.css';

const Join = () => {
  return (
    <div className="landing-page" id='join'>
      <div className="content">
        <h1 className="title">A VICTORIAN ACCELERATOR FOR GLOBALLY IMPACTFUL IDEAS.</h1>
        <p className="description">
          All of Catalyst’s core accelerator operations will be conducted out of our offices in Victoria. We are in the process of closing a studio office with space to accommodate our team and a cohort of 3 startups to ideate, test & deliver with us full-time.
        </p>
        <button className="cta-button">Let's Join Now</button>
      </div>
      <div className="map-container">
        <div className="map">
          <div className="location">
            <span className="label">Catalyst Core Accelerator</span>
            <div className="pin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
