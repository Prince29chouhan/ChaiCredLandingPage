// src/CatalystPage.js
import React, { useState } from 'react';
import './hero.css';
import Navbar from './navbar';

const Hero = () => {
//   const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="container">
      <Navbar />
      <main className="flex flex-col justify-center items-center text-center flex-grow">
        <h1 className="text-5xl text-white mb-6">Hello Everyone 👋</h1>
        <h2 className="text-4xl text-white mb-8">
          Catalyst. Invests, Incubates, and Accelerates Networks That Power The Future of Open Societies on Web3.
        </h2>
        <div className="flex space-x-6 mb-8">
          <div className="bg-black text-white py-4 px-8 rounded">
            <div>One of our best investments</div>
            <div className="text-xl mt-2">$50mm realised | 250x MOIC</div>
          </div>
          <div className="bg-blue-600 text-white py-4 px-8 rounded">
            <div>Investing since</div>
            <div className="text-xl mt-2">2017</div>
          </div>
        </div>
      </main>
      <footer className="text-white text-center py-4">
        <p>SCROLL DOWN</p>
        <p>2023</p>
      </footer>
    </div>
  );
}

export default Hero;
