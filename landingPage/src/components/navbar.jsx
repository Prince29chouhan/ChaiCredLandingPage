import React, {useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    const [activeTab, setActiveTab] = useState('home');
    const [menu, setMenu] = useState("home");
  return (
    <div>
<header className="flex justify-between items-center py-4 px-8">
        <div className="text-white text-2xl font-bold">ChainCred<span className="text-blue-600">.</span></div>
        <nav className="space-x-6 text-white navbar">
          <Link
            to="/" 
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </Link>
          <a 
            href="#funds" 
            className={`nav-link ${activeTab === 'funds' ? 'active' : ''}`}
            onClick={() => setActiveTab('funds')}
          >
            Funds
          </a>
          <a 
            href="#labs" 
            className={`nav-link ${activeTab === 'labs' ? 'active' : ''}`}
            onClick={() => setActiveTab('labs')}
          >
            Labs
          </a>
          <a 
            href="#accelerator" 
            className={`nav-link ${activeTab === 'accelerator' ? 'active' : ''}`}
            onClick={() => setActiveTab('accelerator')}
          >
            Accelerator
          </a>
          <a 
            href="#team" 
            className={`nav-link ${activeTab === 'team' ? 'active' : ''}`}
            onClick={() => setActiveTab('team')}
          >
            Team
          </a>
          <a 
            href="#about" 
            className={`nav-link ${activeTab === 'comingsoon' ? 'active' : ''}`}
            onClick={() => setActiveTab('comingsoon')}
          >
            About
          </a>
        </nav>
        <a href='#join' className="bg-blue-600 text-white py-2 px-4 rounded">Join Now</a>
      </header>
    </div>
  )
}

export default Navbar
