import React from 'react';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import ThingsIKnow from './ThingsIKnow';

function Showcase() {
	return (
		<div className="showcase__container">
			<div className="about__me">
				<h2>
					<span>Hello,</span> I'm Carlos Ramos
				</h2>
				<p>I am a Full-Stack Web Developer who's passionate about building beautiful Web Apps. </p>
				<ul>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link to="/about">about me</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link to="/projects">projects</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link to="/know">things I know</Link>
					</motion.div>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link to="/contactme">contact me</Link>
					</motion.div>
				</ul>
			</div>
			<div className="content">
				{
					<Switch>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/projects">
							<Projects />
						</Route>
						<Route exact path="/know">
							<ThingsIKnow />
						</Route>
						<Route exact path="/contactme">
							<Contact />
						</Route>
						<Route exact path="/" />
					</Switch>
				}
			</div>
		</div>
	);
}

export default Showcase;
