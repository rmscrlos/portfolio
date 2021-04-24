import React from 'react';
import { motion } from 'framer-motion';
import variants from '../framer/variants';

function Contact() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={variants}
			transition={{ ease: 'backInOut', duration: 0.6 }}
			className="contact__container"
		>
			<h1>
				Contact <span>Me.</span>
			</h1>
		</motion.div>
	);
}

export default Contact;
