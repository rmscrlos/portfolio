import React, { useState } from 'react';
import './styles/index.css';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from './components/Header';
import Showcase from './components/Showcase';
const navLinks = [
  {
    title: 'about me',
    goto: '/',
  },
  {
    title: 'projects',
    goto: '/projects',
  },
  {
    title: 'things I know',
    goto: '/know',
  },
  {
    title: 'contact me',
    goto: '/contact',
  },
];

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="app__container">
      <nav className={`nav__container ${active ? 'nav__active' : null}`}>
        <ul>
          {navLinks.map(l => (
            <motion.div className="link" whileHover={{ scale: 1.1 }}>
              <NavLink
                key={l.title}
                activeStyle={{ backgroundColor: '#6c63ff', color: '#fff' }}
                exact
                to={l.goto}
              >
                {l.title}
              </NavLink>
            </motion.div>
          ))}
        </ul>
      </nav>
      <div onClick={() => setActive(!active)} className="mobile__menu">
        <div className={`line ${active ? 'line1' : null}`}></div>
        <div className={`line ${active ? 'line2' : null}`}></div>
      </div>
      <div className="boxes box1"></div>
      <div className="boxes box2"></div>
      <div className="boxes box3"></div>
      <div className="boxes box4"></div>
      <div className="boxes box5"></div>
      <Header />
      <Showcase navLinks={navLinks} />
    </div>
  );
}

export default App;
