import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import variants from '../framer/variants';

function About() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={variants}
			transition={{ ease: 'backInOut', duration: 0.6 }}
			className="about__container"
		>
			<h1>
				About <span>Me.</span>
			</h1>
			<p>
				I am a Full Stack Web Developer based in Florida. I have a serious passion for building beautiful Web
				Apps.
			</p>
			<p>
				Self-motivated person who loves learning, challanges and problem solving. I enjoy playing music, sports,
				video games and watching movies. A family person and the husband to the most beautiful woman in the
				world.
			</p>
			<p>
				Intrested in entire Web Developement and Native spectrum and working on world-changing projects with
				passionate people.
			</p>
		</motion.div>
	);
}

export default About;
