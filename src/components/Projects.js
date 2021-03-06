import React from 'react';
import { motion } from 'framer-motion';
import variants from '../framer/variants';
import ProjectList from './ProjectList';

function Projects() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: 'backInOut', duration: 0.6 }}
      className="projects__container"
    >
      <h1>
        Projects<span>.</span>
      </h1>
      <ProjectList />
    </motion.div>
  );
}

export default Projects;
