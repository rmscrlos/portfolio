import React from 'react';
import { motion } from 'framer-motion';
import variants from '../framer/variants';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

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
      <div className="contact__links">
        <a
          href="mailto:rmscrlos@gmail.com"
          className="conctact__icons"
          target="_blank"
        >
          <EmailIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/rmscrlos/"
          className="conctact__icons"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </a>

        <a
          href="https://github.com/rmscrlos"
          className="conctact__icons"
          target="_blank"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </motion.div>
  );
}

export default Contact;
