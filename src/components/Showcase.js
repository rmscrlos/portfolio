import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import ThingsIKnow from './ThingsIKnow';

function Showcase({ navLinks }) {
  return (
    <div className="showcase__container">
      <div className="about__me">
        <h2>
          <span>Hello,</span> I'm Carlos Ramos
        </h2>
        <p>
          I am a Full-Stack Web Developer who's passionate about building
          beautiful Web Apps.{' '}
        </p>
        <ul>
          {navLinks.map(l => (
            <motion.div whileHover={{ scale: 1.1 }}>
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
      </div>
      <div className="content">
        {
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/know">
              <ThingsIKnow />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        }
      </div>
    </div>
  );
}

export default Showcase;
