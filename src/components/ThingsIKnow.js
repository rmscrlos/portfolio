import React from 'react';
import { motion } from 'framer-motion';
import variants from '../framer/variants';
import ListItem from './ListItem';

function ThingsIKnow() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={variants}
			transition={{ ease: 'backInOut', duration: 0.6 }}
			className="know__container"
		>
			<h1>
				Things I <span>Know.</span>
			</h1>

			<ListItem />
		</motion.div>
	);
}

export default ThingsIKnow;
