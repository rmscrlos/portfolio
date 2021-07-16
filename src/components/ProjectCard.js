import React from 'react';

function ProjectCard({ project }) {
  // const { title, description, stack, demo, github } = p;
  console.log(project);
  return (
    <div className="project__card">
      <h3>{project.title}</h3>
      <p className="project__des">{project.description}</p>
      <p className="project__stack">{project.stack}</p>
      <div className="project__card__links">
        <a href={project.github}>GitHub</a>
        <a href={project.demo}>Live Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;
