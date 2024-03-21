import React, { useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import All from './All';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import './App.css';

const Navbar = () => {
    const [activeOption, setActiveOption] = useState(null);
    const [collapse, setCollapse] = useState(false);
    const location = useLocation(); 

    const navbarToggle = () => {
        setCollapse(!collapse);
    };

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };

    return (
        <header>
            <nav className="navbar bg-light navbar-shadow navbarheader navbar-expand-md navbar-light">
                <div className="container">
                    <img style={{height:"40px" , width:"40px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitbow8t_OtGkuCqebxa9b0qKe9Jt24DgawWiqsroKSQ&s" alt="logo"/>
                    <button className="navbar-toggler" type="button" onClick={navbarToggle}>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-center ${collapse ? 'show' : ''}`}>
                        {/*all navbar options*/}
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {/* All option */}
                            <li className={`nav-item ${activeOption === 'all' || location.pathname === '/' ? 'active' : ''}`} onClick={() => handleOptionClick('all')}>
                                <Link to={'/'} className="nav-link">ALL</Link>
                            </li>
                            {/*Cyber Security Option*/}
                            <li className={`nav-item ${activeOption === 'cyber-security' || location.pathname === '/cyber-security' ? 'active' : ''}`} onClick={() => handleOptionClick('cyber-security')}>
                                <Link to={'/cyber-security'} className="nav-link">CYBER SECURITY</Link>
                            </li>
                            {/* Data Science Option*/}
                            <li className={`nav-item ${activeOption === 'data-science' || location.pathname === '/data-science' ? 'active' : ''}`} onClick={() => handleOptionClick('data-science')}>
                                <Link to={'/data-science'} className="nav-link">DATA SCIENCE</Link>
                            </li>
                            {/* Full Stack Development Option*/}
                            <li className={`nav-item ${activeOption === 'full-stack-development' || location.pathname === '/full-stack-development' ? 'active' : ''}`} onClick={() => handleOptionClick('full-stack-development')}>
                                <Link to={'/full-stack-development'} className="nav-link">FULL STACK DEVELOPMENT</Link>
                            </li>
                            {/*Career Option */}
                            <li className={`nav-item ${activeOption === 'career' || location.pathname === '/career' ? 'active' : ''}`} onClick={() => handleOptionClick('career')}>
                                <Link to={'/career'} className="nav-link">CAREER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Routes */}
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/cyber-security" element={<CyberSecurity />} />
                <Route path="/data-science" element={<DataScience />} />
                <Route path="/full-stack-development" element={<FullStackDevelopment />} />
                <Route path="/career" element={<Career />} />
            </Routes>
        </header>
    );
};

export default Navbar;